import { DataSource } from 'typeorm';
import { Book } from '../book/book.entity';
import { Member } from '../member/member.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', // Ganti dengan username kamu
  password: 'password', // Ganti dengan password kamu
  database: 'library_db',
  entities: [Book, Member],
  synchronize: true,
});

async function seedDatabase() {
  await dataSource.initialize();

  const bookRepository = dataSource.getRepository(Book);
  const memberRepository = dataSource.getRepository(Member);

  // Tambahkan data Books
  await bookRepository.insert([
    { code: "JK-45", title: "Harry Potter", author: "J.K Rowling", stock: 1 },
    { code: "SHR-1", title: "A Study in Scarlet", author: "Arthur Conan Doyle", stock: 1 },
    { code: "TW-11", title: "Twilight", author: "Stephenie Meyer", stock: 1 },
    { code: "HOB-83", title: "The Hobbit, or There and Back Again", author: "J.R.R. Tolkien", stock: 1 },
    { code: "NRN-7", title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", stock: 1 },
  ]);

  // Tambahkan data Members
  await memberRepository.insert([
    { code: "M001", name: "Angga" },
    { code: "M002", name: "Ferry" },
    { code: "M003", name: "Putri" },
  ]);

  console.log('✅ Database telah diisi dengan data awal!');
  await dataSource.destroy();
}

seedDatabase();
