import { Injectable } from "@nestjs/common";
import { CuidadorEntity } from "../entities/cuidador.entity";
import { CuidadorMapper } from "../mappers/cuidador.mapper";
import { Cuidador } from "src/cuidador/domain/entities/cuidador.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class InDatabaseCuidadorRepository{

    private readonly cuidador = new Map<string, CuidadorEntity>();
    @InjectRepository(CuidadorEntity)
    private readonly cuidadorRepository: Repository<CuidadorEntity>

    constructor(private readonly cuidadorMapper: CuidadorMapper) {}
  
    async create(cuidador: Cuidador) {
        const persistenceModel = await this.cuidadorMapper.paraPersistencia(cuidador);

        this.cuidador.set(persistenceModel.id, persistenceModel);
        const newEntity = this.cuidador.get(persistenceModel.id);
        
        this.cuidadorRepository.save(persistenceModel);

        return this.cuidadorMapper.paraDominio(newEntity);
      }
    
      findAll(): Promise<Cuidador[]> {
        const entities = this.cuidadorRepository.find();
        return entities; 
      }
    
      async findOne(id: string): Promise<Cuidador> {
        
        const cuidadorEncontrado = await this.cuidadorRepository.findOne({ where: { id: id } });
        if (!cuidadorEncontrado) return null;
        
        return this.cuidadorMapper.paraDominio(cuidadorEncontrado)
      }
    
      async update(id: string, cuidador: Partial<Cuidador>) {
        const cuidadorEncontrado = this.findOne(id)
        if (!cuidadorEncontrado) return null;

        await this.cuidadorRepository.update(id, cuidador);

        return this.cuidadorRepository.findOneBy({ id });
      }
    
      async remove(id: string) {
        const cuidadorEncontrado = this.findOne(id)
        if (!cuidadorEncontrado) return null;

        const cuidadorDeletado = await this.cuidadorRepository.delete(id);

        if(!cuidadorDeletado.affected) return null;

        return `Cuidador com o ID: #${id} foi delatado`;
      }
    
     
}