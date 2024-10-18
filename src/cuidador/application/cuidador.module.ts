import { Module } from '@nestjs/common';
import { CuidadorService } from './cuidador.service';
import { CuidadorController } from '../presenter/cuidador.controller';

@Module({
  controllers: [CuidadorController],
  providers: [CuidadorService],
})
export class CuidadorModule {}
