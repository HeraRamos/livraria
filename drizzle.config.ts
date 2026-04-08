import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mssql',
  schema: './src/db/schemas/index.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url: '',
  },
});
