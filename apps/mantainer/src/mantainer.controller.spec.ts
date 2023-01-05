import { Test, TestingModule } from '@nestjs/testing';
import { MantainerController } from './mantainer.controller';
import { MantainerService } from './mantainer.service';

describe('MantainerController', () => {
  let mantainerController: MantainerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MantainerController],
      providers: [MantainerService],
    }).compile();

    mantainerController = app.get<MantainerController>(MantainerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mantainerController.getHello()).toBe('Hello World!');
    });
  });
});
