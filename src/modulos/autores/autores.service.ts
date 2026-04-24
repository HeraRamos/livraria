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
    return this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);

    if (autorEncontrado.length === 0) {
      throw new NotFoundException(`Autor com id ${id} não encontrado`);
    }

    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }

  // atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
  //   //const autorEncontrado = autores.find((autor) => autor.id === idAutor);
  //   const autorEncontrado = this.listarAutor(idAutor);

  //   if (!bodyRequest.nome && !bodyRequest.email) {
  //     throw new BadRequestException('Nome ou email é obrigatório.');
  //   }

  //   if (bodyRequest.nome) {
  //     autorEncontrado.nome = bodyRequest.nome;
  //   }
  //   if (bodyRequest.email) {
  //     autorEncontrado.email = bodyRequest.email;
  //   }

  //   return autorEncontrado;
  // }

  deletarAutor(idAutor: number) {
    // utiliza o this para referenciar a própria classe dele(AutoresService)
    // os metódos pertencem ao AutoresService
    // dentro do parênteses é o parâmetro
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
