import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

//adicionar módulo no app.module.ts: imports: [AutoresModule]
@Module({
  controllers: [AutoresController],
  providers: [AutoresService, AutoresRepository],
  exports: [],
})
export class AutoresModule {}
