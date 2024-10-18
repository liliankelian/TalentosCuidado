import { DynamicModule, Module, Type } from '@nestjs/common';
import { CuidadorService } from './cuidador.service';
import { CuidadorController } from '../presenter/cuidador.controller';

@Module({
  controllers: [CuidadorController],
  providers: [CuidadorService],
})
export class CuidadorModule {
  static comInfraestrutura(infrastructureModule: Type | DynamicModule) {
    return {
      module: CuidadorModule,
      imports: [infrastructureModule], //Essa linha é onde ocorre a injeção do módulo de persistência.
    };
  }
}
