import { Global, Module } from '@nestjs/common';
import { DATABASE_URL, DRIZZLE } from './database.constants';
import { drizzle } from 'drizzle-orm/node-mssql';
import * as schema from '../schemas/index';
import { connect } from 'mssql';
import type { config as MsSqlConfig } from 'mssql';

@Global()
//@Global() é um decorator que torna o módulo global, ou seja, ele pode ser usado em qualquer lugar da aplicação
//Se não for global, o módulo só pode ser usado em outros módulos se for importado

//adicionar módulo no app.module.ts: imports: [DatabaseModule]
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: async () => {
        const dbConfig: MsSqlConfig = {
          server: 'SRV-BD-1',
          port: 1433,
          user: 'alunos_des225',
          password: '123',
          database: 'des225_hera',
          options: {
            encrypt: false,
            trustServerCertificate: true,
          },
        };

        const pool = await connect(dbConfig); // cria uma pool de conexões com o banco de dados

        return drizzle({ client: pool, schema: schema }); // retorna o drizzle com o pool de conexões e o schema
      },
    },
  ],
  exports: [DRIZZLE], // exporta o símbolo DRIZZLE para que outros módulos possam usar o drizzle
})
export class DatabaseModule {}
