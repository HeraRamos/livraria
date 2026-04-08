import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { CriarAutorDto } from './autores.dto';

//adicionar módulo no app.module.ts: imports: [AutoresModule]
@Module({
  controllers: [AutoresController],
  providers: [AutoresService],
  exports: [],
})
export class AutoresModule {}
