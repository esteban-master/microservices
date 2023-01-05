import { Controller, Get } from '@nestjs/common';
import { MantainerService } from './mantainer.service';

@Controller()
export class MantainerController {
  constructor(private readonly mantainerService: MantainerService) {}

  @Get()
  getHello(): string {
    return this.mantainerService.getHello();
  }
}
