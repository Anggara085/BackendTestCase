import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { BorrowService } from './borrow.service';

@Controller('borrow')
export class BorrowController {
  constructor(private readonly borrowService: BorrowService) {}

  @Post('/borrow')
  async borrowBook(@Body() data: { memberId: number; bookId: number }) {
    return this.borrowService.borrowBook(data.memberId, data.bookId);
  }

  @Put('/return/:id')
  async returnBook(@Param('id') borrowId: number) {
    return this.borrowService.returnBook(borrowId);
  }
}
