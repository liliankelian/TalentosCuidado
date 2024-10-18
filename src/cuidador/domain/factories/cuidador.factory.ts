import { uuid } from "uuidv4";
import { Cuidador } from "../entities/cuidador.model";

export class CuidadorFactory{

    criar(
        nome: string, 
        email: string, 
        linkedin:string,
        telefone: string
    ){
        const cuidadorId = uuid();
        const ativo = true;

        return new Cuidador(cuidadorId, nome, email, linkedin, telefone, ativo)
    }
}