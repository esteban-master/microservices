import { Controller, Get } from '@nestjs/common';
import { DuesService } from './dues.service';

@Controller()
export class DuesController {
  constructor(private readonly duesService: DuesService) {}

  @Get()
  getHello(): string {
    return this.duesService.getHello();
  }
}
