import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  providers: [MailService, PrismaService],
  controllers: [MailController],
})
export class MailModule {}
