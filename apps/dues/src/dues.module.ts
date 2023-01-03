import { Module } from '@nestjs/common';
import { DuesController } from './dues.controller';
import { DuesService } from './dues.service';

@Module({
  imports: [],
  controllers: [DuesController],
  providers: [DuesService],
})
export class DuesModule {}
