import { Injectable } from '@nestjs/common';
import { LivrosRepository } from './livros.repository';
import { CriarLivroDto } from './livros.dto';
import { AutoresService } from '../autores/autores.service';

@Injectable()
export class LivrosService {
  constructor(
    private readonly livrosRepository: LivrosRepository,
    private readonly AutoresService: AutoresService,
  ) {}

  async listarLivros() {
    return await this.livrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: CriarLivroDto) {
    await this.AutoresService.listarAutor(bodyRequest.id_autor);
    return await this.livrosRepository.criarLivro(bodyRequest);
  }
}
