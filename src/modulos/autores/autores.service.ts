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
    const autorEncontrado = autores.find((autor) => autor.id === id);

    return autorEncontrado;
  }
}
