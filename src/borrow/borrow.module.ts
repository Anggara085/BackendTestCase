import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../book/book.entity';
import { Member } from '../member/member.entity';
import { BorrowController } from './borrow.controller';
import { Borrow } from './borrow.entity';
import { BorrowService } from './borrow.service';

@Module({
  imports: [TypeOrmModule.forFeature([Borrow, Member, Book])],
  providers: [BorrowService],
  controllers: [BorrowController],
  exports: [BorrowService],
})
export class BorrowModule {}
