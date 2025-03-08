import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm'; // Import IsNull
import { Book } from '../book/book.entity';
import { Member } from '../member/member.entity';
import { Borrow } from './borrow.entity';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(Borrow)
    private borrowRepository: Repository<Borrow>,
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  // Fungsi untuk meminjam buku
  async borrowBook(memberId: number, bookId: number): Promise<string> {
    const member = await this.memberRepository.findOne({ where: { id: memberId } });
    const book = await this.bookRepository.findOne({ where: { id: bookId } });

    if (!member) throw new Error('Member tidak ditemukan');
    if (!book) throw new Error('Buku tidak ditemukan');
    if (book.stock < 1) throw new Error('Buku sudah dipinjam oleh orang lain');
    if (member.isPenalized) throw new Error('Member sedang kena penalti');

    // Cek jumlah buku yang sedang dipinjam member (maksimal 2)
    const borrowedBooks = await this.borrowRepository.count({
      where: {
        member: { id: memberId },  // Menggunakan objek member, bukan hanya ID
        returnedAt: IsNull(),  // Menggunakan IsNull untuk memeriksa nilai null pada returnedAt
      },
    });

    if (borrowedBooks >= 2) throw new Error('Member tidak boleh meminjam lebih dari 2 buku');

    book.stock -= 1;
    await this.bookRepository.save(book);

    const borrow = this.borrowRepository.create({ member, book });
    await this.borrowRepository.save(borrow);

    return `Buku "${book.title}" berhasil dipinjam oleh ${member.name}`;
  }

  // Fungsi untuk mengembalikan buku
  async returnBook(borrowId: number): Promise<string> {
    const borrow = await this.borrowRepository.findOne({
      where: { id: borrowId },
      relations: ['book', 'member'], // Memuat relasi member dan book
    });

    if (!borrow) throw new Error('Data peminjaman tidak ditemukan');
    if (borrow.returnedAt) throw new Error('Buku sudah dikembalikan sebelumnya');

    borrow.returnedAt = new Date();
    borrow.book.stock += 1;
    await this.bookRepository.save(borrow.book);
    await this.borrowRepository.save(borrow);

    // Cek apakah pengembalian lebih dari 7 hari
    const borrowDuration = (new Date().getTime() - new Date(borrow.borrowedAt).getTime()) / (1000 * 60 * 60 * 24);
    if (borrowDuration > 7) {
      borrow.member.isPenalized = true;
      await this.memberRepository.save(borrow.member);
      return `Buku "${borrow.book.title}" telah dikembalikan, tetapi ${borrow.member.name} mendapatkan penalti selama 3 hari.`;
    }

    return `Buku "${borrow.book.title}" telah dikembalikan oleh ${borrow.member.name}`;
  }
}
