import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuidadorService } from '../application/cuidador.service';
import { CreateCuidadorCommand } from '../application/commands/create-cuidador.command';
import { UpdateCuidadorDto } from './dto/update-cuidador.dto';
import { CreateCuidadorDto } from './dto/create-cuidador.dto';
import { Cuidador } from '../domain/entities/cuidador.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CuidadorReponse } from './reponse/cuidador.response';

@Controller('cuidador')
@ApiTags('cuidador')
export class CuidadorController {
  constructor(private readonly cuidadorService: CuidadorService) {}

  @Post()
  @ApiOperation({summary: "Rota para criar um cuidador"})
  @ApiResponse({
    status: 200, 
    description: "Cuidador criado com sucesso", 
    type: CuidadorReponse
  })
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
  @ApiOperation({summary: "Rota para listar todos os cuidadores"})
  @ApiResponse({
    status: 200, 
    description: "Lista em JSON com todos os cuidadores",
    type: CuidadorReponse,
    isArray: true
  })
  findAll(): Promise<Cuidador[]> {
    return this.cuidadorService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: "Rota para buscar o cuidador pelo ID"})
  @ApiResponse({status: 200, description: "Informação em JSON do cuidador"})
  findOne(@Param('id') id: string) {
    return this.cuidadorService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary: "Rota para alterar as informações do cuidador"})
  @ApiResponse({status: 200, description: "Informação em JSON do cuidador"})
  update(@Param('id') id: string, @Body() updateCuidadorDto: UpdateCuidadorDto) {
    return this.cuidadorService.update(id, updateCuidadorDto);
  }

  @Delete(':id')
  @ApiOperation({summary: "Rota para deletar o cuidador"})
  @ApiResponse({status: 200, description: "Mensagem com a confirmação da deleção"})
  remove(@Param('id') id: string) {
    return this.cuidadorService.remove(id);
  }
}
