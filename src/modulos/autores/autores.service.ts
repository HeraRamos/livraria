import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

import { identity } from 'rxjs';

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

  /*

  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);
    if (!autorEncontrado) throw new NotFoundException('Autor não encontrado.');

    return autorEncontrado;
  }

  /*

  listarAutor(){
    const autorEncontrado = autores.find((autor) => autor.id === id);
    if (!autorEncontrado){
      throw new NotFoundException('Autor não encontrado');
    }
    return autorEncontrado;
  }

  
  
  
  
  
  
  
  
  
  
  
  /*
  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);
    if (!autorEncontrado) {
      throw new NotFoundException('Autor não encontrado');
    }
    return autorEncontrado;
  }
  /*
  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      //método de retorno do nest
      throw new NotFoundException('Autor não encontrado');
      //escrever no NotFoundException() a mensagem que deseja exibir
      //return 'Autor não encontrado.';
    }

    return autorEncontrado;
  }
*/
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

  atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    //const autorEncontrado = autores.find((autor) => autor.id === idAutor);
    const autorEncontrado = this.listarAutor(idAutor);

    /*chamando o método listarAutor, economizando as próximas 3 linhas de código

    if (!autorEncontrado) {
      return 'Autor não encontrado.';
    }*/

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
}
