import { InjectRepository } from "@nestjs/typeorm";
import { CuidadorEntity } from "../entities/cuidador.entity";
import { Injectable } from "@nestjs/common";
import { Cuidador } from "src/cuidador/domain/entities/cuidador.model";

@Injectable()
export class CuidadorMapper{
    constructor(){}

    paraDominio(cuidadorEntity: CuidadorEntity): Cuidador{
        return new Cuidador(
            cuidadorEntity.id,
            cuidadorEntity.nome,
            cuidadorEntity.email,         
            cuidadorEntity.linkedin,
            cuidadorEntity.telefone,
            cuidadorEntity.ativo
        )
    }

    paraPersistencia(cuidador: Cuidador): CuidadorEntity{
        const entity = new CuidadorEntity();
        entity.id = cuidador.id,
        entity.nome = cuidador.nome,
        entity.email = cuidador.email,         
        entity.linkedin = cuidador.linkedin,
        entity.telefone = cuidador.telefone,
        entity.ativo = cuidador.ativo
        return entity;
    }

}