import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // Endpoint untuk menambah buku
  @Post()
  async create(@Body() bookData: Partial<Book>): Promise<Book> {
    return this.bookService.create(bookData);
  }

  // Endpoint untuk mengambil semua buku
  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  // Endpoint untuk mengambil satu buku berdasarkan ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }

  // Endpoint untuk mengupdate buku berdasarkan ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() bookData: Partial<Book>): Promise<Book> {
    return this.bookService.update(id, bookData);
  }

  // Endpoint untuk menghapus buku berdasarkan ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.bookService.remove(id);
  }
}
