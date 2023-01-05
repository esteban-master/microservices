import { NestFactory } from '@nestjs/core';
import { MantainerModule } from './mantainer.module';

async function bootstrap() {
  const app = await NestFactory.create(MantainerModule);
  await app.listen(3000);
}
bootstrap();
