import { NestFactory } from '@nestjs/core';
import { DuesModule } from './dues.module';

async function bootstrap() {
  const app = await NestFactory.create(DuesModule);
  await app.listen(3000);
}
bootstrap();
