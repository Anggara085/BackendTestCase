import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;

  @Column({ default: false })
  isPenalized: boolean;
}

