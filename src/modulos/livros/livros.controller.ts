import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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

 @Get('/listar-livro/:id')
 async listarLivro(@Param('id', ParseIntPipe) id: number) {
  return await this.livrosService.listarLivro(id);
 }


}
