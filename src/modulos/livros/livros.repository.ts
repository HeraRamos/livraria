import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { livrosTabela } from 'src/db/schemas/livros';

@Injectable()
export class LivrosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarLivros() {
    try {
      const livros = await this.db.select().from(livrosTabela);

      return livros;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar livros');
    }
  }

  async criarLivro(bodyRequest: any) {
    try {
      await this.db.insert(livrosTabela).values({
        idAutor: bodyRequest.id_autor,
        titulo: bodyRequest.titulo,
        descricao: bodyRequest.descricao,
      });

      return `Livro ${bodyRequest.titulo} criado com sucesso`;
    } catch (error) {}
    throw new InternalServerErrorException('Erro ao criar livro');
  }
}
