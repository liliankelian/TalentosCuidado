import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('home')
@ApiTags('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: "Rota para verificar se a API está rodando"})
  @ApiResponse({status: 200, description: "Texto com API funcionando"})
  getHello(): string {
    return this.appService.getHello();
  }
}
