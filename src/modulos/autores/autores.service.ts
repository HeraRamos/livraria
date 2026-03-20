import { Injectable } from '@nestjs/common';

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
];

@Injectable()
export class AutoresService {
  listarAutores() {
    return autores;
  }
  listarAutor(id: number) {
    if (autor) {
      return autor;
    }
  return 'Autor não encontrado';
  }

  criarAutor(body: CriarAutorDto) {
    autores.push({
      id: autores.length + 1,
      nome: body.nome
      email: body.email,
    });
    atualizarAutor(idAutor: Number, bodyRequest: any) {
      const autorEncontrado = autores.find((autor) => autor.id === idAutor);

      if (!autorEncontrado) {
        return 'Autor não encontrado';
      }
    }
    autorEncontrado.nome = bodyRequest.nome;
    autorEncontrado.email = bodyRequest.email;

    return autorEncontrado;
  }
}
