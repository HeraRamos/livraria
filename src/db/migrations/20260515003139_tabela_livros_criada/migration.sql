CREATE TABLE [livros] (
	[id] int IDENTITY(1, 1),
	[titulo] varchar(100) NOT NULL,
	[id_autor] int NOT NULL,
	[descrição] text NOT NULL,
	[criado_em] datetime NOT NULL CONSTRAINT [livros_criado_em_default] DEFAULT (getdate()),
	[atualizado_em] datetime NOT NULL CONSTRAINT [livros_atualizado_em_default] DEFAULT (getdate()),
	CONSTRAINT [livros_pkey] PRIMARY KEY([id])
);
--> statement-breakpoint
ALTER TABLE [livros] ADD CONSTRAINT [livros_id_autor_autores_id_fk] FOREIGN KEY ([id_autor]) REFERENCES [autores]([id]);