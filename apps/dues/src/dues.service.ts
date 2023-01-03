import { Injectable } from '@nestjs/common';

@Injectable()
export class DuesService {
  getHello(): string {
    return 'Hello World!';
  }
}
