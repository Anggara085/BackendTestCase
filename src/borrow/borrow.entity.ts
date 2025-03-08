import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from '../book/book.entity';
import { Member } from '../member/member.entity';

@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Member, (member) => member.id)
  member: Member;

  @ManyToOne(() => Book, (book) => book.id)
  book: Book;

  @CreateDateColumn()
  borrowedAt: Date;

  @Column({ nullable: true })
  returnedAt: Date;
}
