import { Module } from '@nestjs/common';
import { AutoresModule } from './modulos/autores/autores.module';
import { DatabaseModule } from './db/database/database.module';
import { LivrosModule } from './modulos/livros/livros.module';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';

@Module({
  imports: [AutoresModule, DatabaseModule, LivrosModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
