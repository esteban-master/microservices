import { Module } from '@nestjs/common';
import { MantainerController } from './mantainer.controller';
import { MantainerService } from './mantainer.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { PrismaService } from './prisma.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
      }),
    }),
  ],
  controllers: [MantainerController],
  providers: [MantainerService, PrismaService],
})
export class MantainerModule {}
