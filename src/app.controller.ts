import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('home')
@ApiTags('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: "Rota para verificar se a API está rodando"})
  getHello(): string {
    return this.appService.getHello();
  }
}
