CREATE TABLE [usuarios] (
	[id] int IDENTITY(1, 1),
	[nome] varchar(100) NOT NULL,
	[email] varchar(255) NOT NULL,
	[password_hashed] varchar(255) NOT NULL,
	[ativo] bit NOT NULL CONSTRAINT [usuarios_ativo_default] DEFAULT ((1)),
	[criado_em] datetime NOT NULL CONSTRAINT [usuarios_criado_em_default] DEFAULT (getdate()),
	CONSTRAINT [usuarios_pkey] PRIMARY KEY([id]),
	CONSTRAINT [usuarios_email_key] UNIQUE([email])
);
