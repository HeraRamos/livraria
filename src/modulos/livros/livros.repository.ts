import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { livrosTabela } from 'src/db/schemas/livros';
import { autoresTabela } from 'src/db/schemas/autores';
import { CriarLivroDto } from './livros.dto';
import { eq } from 'drizzle-orm';

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

  async criarLivro(bodyRequest: CriarLivroDto) {
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
  async listarlivro(id: number) {
    try {
      const livroEncontrado = await this.db
        .select()
        .from(livrosTabela)
        .where(eq(livrosTabela.id, id));
      return livroEncontrado[0];
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar um livro');
    }
  }

 async listarLivrosComAutor() {
 try {
  const livrosComAutor = await this.db
  .select({
    id: livrosTabela.id,
    titulo: livrosTabela.titulo,
    nome: autoresTabela.nome,
    descricao: livrosTabela.descricao,
  })
  .from(livrosTabela)
  .innerJoin(autoresTabela, eq(livrosTabela.idAutor, autoresTabela.id));

  return livrosComAutor;
 } catch (error) {
  throw new InternalServerErrorException('Erro ao listar livros com autor');
 }

 }

}
