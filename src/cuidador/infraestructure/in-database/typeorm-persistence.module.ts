import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './typeOrm.config';
import { CuidadorEntity } from './entities/cuidador.entity';
import { CuidadorRepository } from 'src/cuidador/application/ports/cuidador.repository';
import { InDatabaseCuidadorRepository } from './repositories/in-datase.repository';
import { CuidadorMapper } from './mappers/cuidador.mapper';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([CuidadorEntity])
  ],
  providers: [
    {
      provide: CuidadorRepository,
      useClass: InDatabaseCuidadorRepository, // É aqui que nós vinculamos uma porta e a um adaptador (a ideia aqui é dizer para o NestJS usar o InMemoryAlunoRepository sempre que alguém pedir por um AlunoRepository - isso facilita muito a troca de adaptadores, vc não precisa mudar nada no resto do código, só aqui).
    },
    CuidadorMapper,
  ],
  exports: [CuidadorRepository, TypeOrmModule],
})
export class TypeOrmAlunoPersistenceModule {}
