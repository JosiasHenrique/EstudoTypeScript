"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GerenciadorUsuarios_1 = require("./services/GerenciadorUsuarios");
var gerenciador = new GerenciadorUsuarios_1.GerenciadorUsuarios();
try {
    var usuario1 = gerenciador.adicionarUsuario("Ana", "ana@gmail.com", 25);
    var usuario2 = gerenciador.adicionarUsuario("Calleri", "calleri@gmail.com", 29);
    console.log("Usuários adicionados:", gerenciador.listarUsuarios());
    gerenciador.atualizarUsuario(usuario1.id, { nome: "Ana Maria" });
    console.log("Usuário atualizado:", gerenciador.listarUsuarios());
    gerenciador.removerUsuario(usuario2.id);
    console.log("Usuários após remoção:", gerenciador.listarUsuarios());
}
catch (error) {
    console.error("Erro ao gerenciar usuários: ", error);
}
