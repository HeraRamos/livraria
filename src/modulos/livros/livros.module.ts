import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { LivrosRepository } from './livros.repository';
import { AutoresModule } from '../autores/autores.module';

@Module({
  controllers: [LivrosController],
  providers: [LivrosService, LivrosRepository],
  exports: [],
  imports: [AutoresModule],
})
export class LivrosModule {}
