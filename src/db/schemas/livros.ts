import {
  mssqlTable,
  varchar,
  int,
  datetime,
  text,
} from 'drizzle-orm/mssql-core';
import { autoresTabela } from './autores';
// import { int } from "drizzle-orm/mysql-core";

export const livrosTabela = mssqlTable('livros', {
  id: int('id').primaryKey().identity(),
  titulo: varchar('titulo', { length: 100 }).notNull(),
  idAutor: int('id_autor')
    .notNull()
    .references(() => autoresTabela.id),
  descricao: text('descrição').notNull(),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
  atualizadoEm: datetime('atualizado_em').notNull().defaultGetDate(),
});

export type Livro = typeof livrosTabela.$inferInsert;
export type CriarLivro = typeof livrosTabela.$inferInsert;
