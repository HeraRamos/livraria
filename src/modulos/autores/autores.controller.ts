import { Controller, Get } from '@nestjs/common';
import { AutoresService } from './autores.service';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  listarAutores() {
    return this.autoresService.listarAutores();
  }
}
