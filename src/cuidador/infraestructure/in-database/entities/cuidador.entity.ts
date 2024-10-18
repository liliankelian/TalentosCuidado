import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cuidadores')
export class CuidadorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @IsString({ message: 'nome deve ser uma string.' })
    @IsNotEmpty()
    @Column()
    nome:string;
    
    @IsString({ message: 'email deve ser uma string.' })
    @IsNotEmpty()
    @Column()
    email:string;
    
    @IsString({ message: 'linkedin deve ser uma string.' })
    @IsNotEmpty()
    @Column()
    linkedin:string;
    
    @IsString({ message: 'telefone deve ser uma string.' })
    @IsNotEmpty()
    @Column()
    telefone:string;
    
    @IsBoolean({ message: 'ativo deve ser uma boolean.' })
    @IsNotEmpty()
    @Column()
    ativo:boolean;
  
}
