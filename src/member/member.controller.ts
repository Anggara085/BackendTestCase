import { Controller, Get, Param } from '@nestjs/common';
import { Member } from './member.entity';
import { MemberService } from './member.service';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  async findAll(): Promise<Member[]> {
    return this.memberService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Member> {
    return this.memberService.findOne(id);
  }
}

