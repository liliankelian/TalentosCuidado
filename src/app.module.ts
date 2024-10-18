import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuidadorModule } from './cuidador/application/cuidador.module';
import { CuidadorInfraestructureModule } from './cuidador/infraestructure/cuidador-infraestructure.module';
import { ApplicationBootstrapOptions } from './cuidador/commom/interfaces/application-bootstrap-options.interface';
import { CoreModule } from './cuidador/commom/core/core.module';

@Module({
  imports: [
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    static register(options: ApplicationBootstrapOptions) {
      return {
        module: AppModule,
        imports: [
          CoreModule.forRoot(options), // Aqui entram as opções de configuração do banco de dados
          CuidadorModule.comInfraestrutura(
            CuidadorInfraestructureModule.use(options.driver),
          ),
        ],
      };
    }
}
