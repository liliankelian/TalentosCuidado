import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuidadorService } from '../application/cuidador.service';
import { CreateCuidadorCommand } from '../application/commands/create-cuidador.command';
import { UpdateCuidadorDto } from './dto/update-cuidador.dto';
import { CreateCuidadorDto } from './dto/create-cuidador.dto';
import { Cuidador } from '../domain/entities/cuidador.model';

@Controller('cuidador')
export class CuidadorController {
  constructor(private readonly cuidadorService: CuidadorService) {}

  @Post()
  create(@Body() createCuidadorDto: CreateCuidadorDto) {
    const command = new CreateCuidadorCommand(
      createCuidadorDto.nome,
      createCuidadorDto.email,
      createCuidadorDto.linkedin,
      createCuidadorDto.telefone
    )
    console.log(command);

    return this.cuidadorService.create(command);
  }

  @Get()
  findAll(): Promise<Cuidador[]> {
    return this.cuidadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuidadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuidadorDto: UpdateCuidadorDto) {
    return this.cuidadorService.update(id, updateCuidadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuidadorService.remove(id);
  }
}
