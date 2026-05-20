import { Module } from '@nestjs/common';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { LivrosRepository } from './livros.repository';

@Module({
  controllers: [LivrosController],
  providers: [LivrosService, LivrosRepository],
  exports: [],
})
export class LivrosModule {}
