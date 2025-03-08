import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ default: 1 })
  stock: number;
}
