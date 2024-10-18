import { Injectable } from '@nestjs/common';
import { CreateCuidadorCommand} from './commands/create-cuidador.command';
import { UpdateCuidadorCommand } from './commands/update-cuidador.command';
import { CuidadorRepository } from './ports/cuidador.repository';
import { CuidadorFactory } from '../domain/factories/cuidador.factory';

@Injectable()
export class CuidadorService {
  constructor(
    private readonly cuidadorRepository: CuidadorRepository
  ){}

  async create(createCuidadorCommand: CreateCuidadorCommand) {
    const cuidadorNew = new CuidadorFactory().criar(
      createCuidadorCommand.nome,
      createCuidadorCommand.email,
      createCuidadorCommand.linkedin,
      createCuidadorCommand.telefone
    );

    console.log(cuidadorNew);
    
    return this.cuidadorRepository.create(cuidadorNew);
  }

  findAll() {
    return this.cuidadorRepository.findAll();
  }

  findOne(id: string) {
    console.log(id);
    return this.cuidadorRepository.findOne(id);
  }

  update(id: string, updateCuidadorCommand: UpdateCuidadorCommand) {
    return this.cuidadorRepository.update(id,updateCuidadorCommand);
  }

  remove(id: string) {
    return this.cuidadorRepository.remove(id);
  }
}
