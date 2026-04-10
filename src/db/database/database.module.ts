import { Global, Module } from '@nestjs/common';
import { DATABASE_URL, DRIZZLE } from './database.constants';
import { drizzle } from 'drizzle-orm/node-mssql';
import * as schema from '../schemas/index';

@Global()
//@Global() é um decorator que torna o módulo global, ou seja, ele pode ser usado em qualquer lugar da aplicação
//Se não for global, o módulo só pode ser usado em outros módulos se for importado

//adicionar módulo no app.module.ts: imports: [DatabaseModule]
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: () => {
        return drizzle(DATABASE_URL, { schema: schema });
      },
    },
  ],
  exports: [DRIZZLE], // exporta o símbolo DRIZZLE para que outros módulos possam usar o drizzle
})
export class DatabaseModule {}
