import { Module } from '@nestjs/common';

import { AutoresModule } from './modulos/autores/autores.module';
import { DatabaseModule } from './db/database/database.module';

@Module({
  imports: [AutoresModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
