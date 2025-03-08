import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  async findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  async findOne(id: number): Promise<Member> {
    const member = await this.memberRepository.findOne({ where: { id } });

    if (!member) {
      throw new Error(`Member dengan ID ${id} tidak ditemukan`);
    }

    return member;
  }
}

