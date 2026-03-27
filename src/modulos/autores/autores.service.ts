import {
  BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

let autores = [
  {
    id: 1,
    nome: 'Hera Silveira',
    email: 'Hera.Ramos@gmail.com',
  },

  {
    id: 2,
    nome: 'Ana Paula',
    email: 'Ana.Paula@gmail.com',
  },
  {
    id: 3,
    nome: 'Paulo Henrique',
    email: 'Paulo.Henrique@gmail.com',
  },
  {
    id: 4,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
];

@Injectable()
export class AutoresService {
  listarAutores() {
    if (!autores) {
      return 'Autor Não Encontrado';
    }

    return autores;
  }
  listarAutor(id: number) {
    const autor = autores.find((autor) => autor.id === id);

    if (!autor) {
      throw new NotFoundException('autor nao encontrado');
    }
    return autor;
  }

  @HttpCode(HttpStatus.CREATED)
  criarAutor(body: CriarAutorDto) {
    if (!body.nome || !body.email) {
      return 'Nome e email sao obrigatorios';
    }
    autores.push({
      id: autores.length + 1,
      nome: body.nome,
      email: body.email,
    });

    return autores;
  }

  atualizarAutor(id: number, body: AtualizarAutorDto) {
    const autorEncontrado = this.listarAutor(id);

    if (!body.nome && !body.email) {
      throw new BadRequestException('Nome e email são obrigatorios');
    }

    if (body.nome) {
      autorEncontrado.nome = body.nome;
    }

    if (body.email) {
      autorEncontrado.email = body.email;
    }

    return autorEncontrado;
  }

  deletar(id: number) {
    const autorEncontrado = this.listarAutor(id);

    if (autorEncontrado) {
      return autores.filter((autor) => autor.id !== id);
    }
  }
}
