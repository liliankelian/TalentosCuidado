import { Test, TestingModule } from '@nestjs/testing';
import { CuidadorController } from './cuidador.controller';
import { CuidadorService } from '../application/cuidador.service';

describe('CuidadorController', () => {
  let controller: CuidadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuidadorController],
      providers: [CuidadorService],
    }).compile();

    controller = module.get<CuidadorController>(CuidadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
