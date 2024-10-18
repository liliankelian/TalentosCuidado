import { IsEmail, IsString, IsUrl } from "class-validator"

export class CreateCuidadorDto {
    @IsString()
    nome:string

    @IsString()
    @IsEmail()
    email:string

    @IsString()
    @IsUrl()
    linkedin:string

    @IsString()
    telefone:string
    
}
