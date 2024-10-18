import { Cuidador } from "src/cuidador/domain/entities/cuidador.model";

export abstract class CuidadorRepository{
    abstract create(cuidador: Cuidador) : Promise<Cuidador>;
    abstract findAll() : Promise<Cuidador[]>;
    abstract findOne(id: string) : Promise<Cuidador>;
    abstract update(id: string, cuidador: Partial<Cuidador>) 
    abstract remove(id: string) 
}