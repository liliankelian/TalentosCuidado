import { Test, TestingModule } from '@nestjs/testing';
import { CuidadorService } from './cuidador.service';

describe('CuidadorService', () => {
  let service: CuidadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuidadorService],
    }).compile();

    service = module.get<CuidadorService>(CuidadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
