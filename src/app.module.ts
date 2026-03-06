import { Module } from '@nestjs/common';
import { AutoresModule } from './modulos/autores/autores.module';

@Module({
  imports: [AutoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
