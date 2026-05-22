import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CriarLivroDto {
  @IsString({ message: 'O título deve ser uma string' })
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @MinLength(3, { message: 'O titulo deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O título deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  titulo: string;

  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição é obrigatório' })
  @MinLength(3, { message: 'A descrição deve ter pelo menos 3 caracteres' })
  @MaxLength(500, { message: 'A descrição deve ter no máximo 500 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  descricao: string;

  @IsNotEmpty({ message: 'O idAutor é obrigatório' })
  @Type(() => Number)
  id_autor: number;
}
