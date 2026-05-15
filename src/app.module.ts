import { Module } from '@nestjs/common';

import { AutoresModule } from './modulos/autores/autores.module';
import { DatabaseModule } from './db/database/database.module';
import { LivrosModule } from './modulos/livros/livros.module';

@Module({
  imports: [AutoresModule, DatabaseModule, LivrosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
