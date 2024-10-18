import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuidadorService } from '../application/cuidador.service';
import { CreateCuidadorDto } from '../application/dto/create-cuidador.dto';
import { UpdateCuidadorDto } from '../application/dto/update-cuidador.dto';

@Controller('cuidador')
export class CuidadorController {
  constructor(private readonly cuidadorService: CuidadorService) {}

  @Post()
  create(@Body() createCuidadorDto: CreateCuidadorDto) {
    return this.cuidadorService.create(createCuidadorDto);
  }

  @Get()
  findAll() {
    return this.cuidadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuidadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuidadorDto: UpdateCuidadorDto) {
    return this.cuidadorService.update(+id, updateCuidadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuidadorService.remove(+id);
  }
}
