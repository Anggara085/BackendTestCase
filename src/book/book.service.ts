import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  // Menambahkan buku baru
  async create(bookData: Partial<Book>): Promise<Book> {
    const book = this.bookRepository.create(bookData);
    return this.bookRepository.save(book);
  }

  // Mengambil semua buku
  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  // Mengambil satu buku berdasarkan ID, dengan pengecekan null
  async findOne(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      throw new Error(`Buku dengan ID ${id} tidak ditemukan`);
    }
    return book;
  }

  // Mengupdate data buku
  async update(id: number, bookData: Partial<Book>): Promise<Book> {
    await this.bookRepository.update(id, bookData);
    return this.findOne(id); // Pastikan untuk memanggil findOne() yang sudah menangani pengecekan null
  }

  // Menghapus buku berdasarkan ID
  async remove(id: number): Promise<void> {
    const book = await this.findOne(id); // Pastikan buku ada sebelum menghapus
    await this.bookRepository.delete(book.id);
  }
}
