import {
  mssqlTable,
  int,
  varchar,
  bit,
  datetime,
} from 'drizzle-orm/mssql-core';

export const autoresTabela = mssqlTable('autores', {
  id: int('id').primaryKey().identity(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  ativo: bit('ativo').notNull().default(true),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
});

export type Autor = typeof autoresTabela.$inferSelect;
export type CriarAutor = typeof autoresTabela.$inferInsert;
