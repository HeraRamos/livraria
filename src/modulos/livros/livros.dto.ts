import { IsString, MinLength, IsNotEmpty, MaxLength } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CriarLivroDto {
  @IsString({ message: 'O titulo deve ser uma string' })
  @IsNotEmpty({ message: 'O titulo é obrigatório' })
  @MinLength(3, { message: 'O titulo deve ter entre 3 e 100 caracteres' })
  @MaxLength(100, { message: 'O titulo deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
    return value;
  })
  descricao: string;

  @IsNotEmpty({ message: 'O idAutor é obrigatório' })
  @Type(() => Number)
  id_autor: number;
}
