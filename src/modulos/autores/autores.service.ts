import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

import { identity } from 'rxjs';
import { AutoresRepository } from './autores.repository';

let autores = [
  {
    id: 1,
    nome: 'João Maria',
    email: 'joaomaria@gmail.com',
  },
  {
    id: 2,
    nome: 'Juliana Silva',
    email: 'julianasilva@gmail.com',
  },
  {
    id: 3,
    nome: 'David Silva',
    email: 'davidsilva@gmail.com',
  },
];
@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository) {}

  async listarAutores() {
    return await this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);
    //if (!autorEncontrado) <-- desta forma ele mostra um array vazio
    if (!autorEncontrado) {
      throw new NotFoundException(`Autor com id ${id} não encontrado.`);
    }
    return autorEncontrado;
  }
  criarAutor(bodyRequest: CriarAutorDto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }

  async atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    await this.listarAutor(idAutor);

    return this.autoresRepository.atualizarAutor(idAutor, bodyRequest);
  }

  async deletarAutor(idAutor: number) {
    await this.listarAutor(idAutor);
    return this.autoresRepository.deletarAutor(idAutor);
  }

  /*----------MÉTODOS USANDO ARRAY SEM DB------------------
  listarAutores() {
    if (!autores) {
      return 'Não há autores cadastrados';
    }
    //console.log("listarService");
    //API sempre retorna json
    return autores;
  }

  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);
    if (!autorEncontrado) throw new NotFoundException('Autor não encontrado');

    return autorEncontrado;
  }
    
  criarAutor(bodyRequest: CriarAutorDto) {
    if (!bodyRequest.nome || !bodyRequest.email) {
      return 'Nome e email são obrigatórios.';
    }
    autores.push({
      id: autores.length + 1,
      nome: bodyRequest.nome,
      email: bodyRequest.email,
    });
    return autores;
  }

  ----------MÉTODOS USANDO ARRAY SEM DB------------------
  atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    //const autorEncontrado = autores.find((autor) => autor.id === idAutor);
    const autorEncontrado = this.listarAutor(idAutor);

    /*chamando o método listarAutor, economizando as próximas 3 linhas de código

    if (!autorEncontrado) {
      return 'Autor não encontrado.';
    }

    if (!bodyRequest.nome && !bodyRequest.email) {
      throw new BadRequestException('Nome ou email é obrigatório.');
    }

    if (bodyRequest.nome) {
      autorEncontrado.nome = bodyRequest.nome;
    }
    if (bodyRequest.email) {
      autorEncontrado.email = bodyRequest.email;
    }

    return autorEncontrado;
  }
  
  deletarAutor(idAutor: number) {
    // utiliza o this para referenciar a própria classe dele(AutoresService)
    // os metódos pertencem ao AutoresService
    // dentro do parênteses é o parâmetro
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
  */

  // async inativarAutor(id: number) {
  //   try {
  //     await this.db.update(autoresTabela).set({ ativo: false }).where(eq(autoresTabela.id, id));
  //     return `Autor inativado com sucesso: ${id}`;
  //   } catch (error) {
  //     throw new InternalServerErrorException('Erro ao inativar autor.');
  //   }
}
