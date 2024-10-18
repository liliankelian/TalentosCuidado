import { Injectable } from '@nestjs/common';
import { CreateCuidadorDto } from './dto/create-cuidador.dto';
import { UpdateCuidadorDto } from './dto/update-cuidador.dto';

@Injectable()
export class CuidadorService {
  create(createCuidadorDto: CreateCuidadorDto) {
    return 'This action adds a new cuidador';
  }

  findAll() {
    return `This action returns all cuidador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cuidador`;
  }

  update(id: number, updateCuidadorDto: UpdateCuidadorDto) {
    return `This action updates a #${id} cuidador`;
  }

  remove(id: number) {
    return `This action removes a #${id} cuidador`;
  }
}
