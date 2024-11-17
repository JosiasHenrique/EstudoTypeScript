import { Usuario } from './../models/Usuario';

export class GerenciadorUsuarios {
    private usuarios: Usuario[] = [];
    private proximoId: number = 1;

    adicionarUsuario(nome: string, email: string, idade?: number): Usuario {
        const novoUsuario: Usuario = { id: this.proximoId++, nome, email, idade }
        this.usuarios.push(novoUsuario);
        return novoUsuario;
    }

    atualizarUsuario(id: number, dados: Partial<Usuario>): Usuario | null {
        const usuario = this.usuarios.find(u => u.id === id);
        if(!usuario) throw new Error("Usuário não encontrado.");

        usuario.nome = dados.nome ?? usuario.nome;
        usuario.email = dados.email ?? usuario.email;
        usuario.idade = dados.idade ?? usuario.idade;
        return usuario;
    }

    removerUsuario(id: number): void {
        const indice = this.usuarios.findIndex(u => u.id === id);
        if (indice === -1) throw new Error("Usuário não encontrado.");

        this.usuarios.splice(indice, 1);
    }

    listarUsuarios(): Usuario[] {
        return this.usuarios;
    }
}