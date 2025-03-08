import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { BorrowModule } from './borrow/borrow.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'library_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BookModule,
    MemberModule,
    BorrowModule,
  ],
})
export class AppModule {}
