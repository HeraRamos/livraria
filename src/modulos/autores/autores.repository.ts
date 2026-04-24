import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { autoresTabela } from 'src/db/schemas';
import { eq } from 'drizzle-orm';
import { CriarAutorDto } from './autores.dto';

@Injectable()
export class AutoresRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarAutores() {
    try {
      return this.db.select().from(autoresTabela);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar Autores');
    }
  }

  async listarAutor(id: number) {
    try {
      return await this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.id, id));
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
        .where(autoresTabela.email, bodyRequest.email); //erro//

      return autorCriado;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar um autor');
    }
  }
}
