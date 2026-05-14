import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DRIZZLE } from 'src/db/database/database.constants';
import { autoresTabela } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

@Injectable()
export class AutoresRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarAutores() {
    return this.db.select().from(autoresTabela);
  }

  async listarAutor(id: number) {
    try {
      const autorEncontrado = await this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.id, id));
      return autorEncontrado[0];
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar um autor');
    }
  }
  async criarAutor(bodyRequest: CriarAutorDto) {
    try {
      await this.db.insert(autoresTabela).values(bodyRequest);
      const autorCriado = await this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.email, bodyRequest.email));
      return autorCriado;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar autor.');
    }
  }

  async atualizarAutor(id: number, bodyRequest: AtualizarAutorDto) {
    try {
      const autorAtualizado = await this.db
        .update(autoresTabela)
        .set(bodyRequest)
        .where(eq(autoresTabela.id, id));
      return `Autor atualizado com sucesso: ${autorAtualizado}`;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao atualizar autor.');
    }
  }

  async deletarAutor(id: number) {
    try {
      await this.db.delete(autoresTabela).where(eq(autoresTabela.id, id));
      return `Autor deletado com sucesso: ${id}`;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao deletar autor.');
    }
  }

  // async inativarAutor(id: number) {
  //   try {
  //     await this.db.update(autoresTabela).set({ ativo: false }).where(eq(autoresTabela.id, id));
  //     return `Autor inativado com sucesso: ${id}`;
  //   } catch (error) {
  //     throw new InternalServerErrorException('Erro ao inativar autor.');
  //   }
}
