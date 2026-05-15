import { Controller, Get } from '@nestjs/common';
import { LivrosService } from './livros.services';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get('/listar-livros')
  async listarLivros() {
    return await this.livrosService.listarLivros();
  }
}
