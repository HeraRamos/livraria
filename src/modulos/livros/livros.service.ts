import { Injectable } from '@nestjs/common';
import { LivrosRepository } from './livros.repository';
import { CriarLivroDto } from './livros.dto';

@Injectable()
export class LivrosService {
  constructor(private readonly livrosRepository: LivrosRepository) {}

  async listarLivros() {
    return await this.livrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: CriarLivroDto) {
    return await this.livrosRepository.criarLivro(bodyRequest);
  }
}
