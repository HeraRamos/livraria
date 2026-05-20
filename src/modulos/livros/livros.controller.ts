import { Body, Controller, Get, Post } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CriarLivroDto } from './livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get('/listar-livros')
  async listarLivros() {
    return await this.livrosService.listarLivros();
  }

  @Post('criar-livro')
  async criarLivro(@Body() bodyRequest: CriarLivroDto) {
    return await this.livrosService.criarLivro(bodyRequest);
  }
}
