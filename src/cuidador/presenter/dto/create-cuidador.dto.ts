import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, IsUrl } from "class-validator"

export class CreateCuidadorDto {
    @ApiProperty()
    @IsString()
    nome:string

    @ApiProperty()
    @IsString()
    @IsEmail()
    email:string

    @ApiProperty()
    @IsString()
    @IsUrl()
    linkedin:string

    @IsString()
    @ApiProperty()
    telefone:string
    
}
