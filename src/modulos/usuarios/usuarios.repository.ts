import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { DRIZZLE } from "src/db/database/database.constants";
import { usuariosTabela } from "src/db/schemas";
import type { DrizzleDB } from "src/db/types/drizzleDB";
import { CriarUsuarioDto } from "./usuarios.dto";
import { eq } from "drizzle-orm";


@Injectable()
export class UsuariosRepository {
    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

 async criarUsuario(usuario: CriarUsuarioDto) {
    try {
        await this.db.insert(usuariosTabela).values({
            nome: usuario.nome,
            email: usuario.email,
            passwordHashed: usuario.password,
        });

        return usuario;
    } catch (error) {
        throw new InternalServerErrorException('Erro ao criar usuário')
    }
 }

 async buscarUsuarioPorEmail(email: string) {
    try {
        const usuarioEncontrado = await this.db
        .select()
        .from(usuariosTabela)
        .where(eq(usuariosTabela.email, email));
        
        return usuarioEncontrado[0] ?? null;
    } catch (error) {
        throw new InternalServerErrorException('Erro ao buscar usuario por email');
}
}
}