import { PartialType } from '@nestjs/mapped-types';
import { CreateCuidadorCommand } from './create-cuidador.command';

export class UpdateCuidadorCommand extends PartialType(CreateCuidadorCommand) {
    
}
