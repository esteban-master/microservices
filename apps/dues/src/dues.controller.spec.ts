import { Test, TestingModule } from '@nestjs/testing';
import { DuesController } from './dues.controller';
import { DuesService } from './dues.service';

describe('DuesController', () => {
  let duesController: DuesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DuesController],
      providers: [DuesService],
    }).compile();

    duesController = app.get<DuesController>(DuesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(duesController.getHello()).toBe('Hello World!');
    });
  });
});
