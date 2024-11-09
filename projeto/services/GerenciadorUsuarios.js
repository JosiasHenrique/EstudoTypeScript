"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorUsuarios = void 0;
var GerenciadorUsuarios = /** @class */ (function () {
    function GerenciadorUsuarios() {
        this.usuarios = [];
        this.proximoId = 1;
    }
    GerenciadorUsuarios.prototype.adicionarUsuario = function (nome, email, idade) {
        var novoUsuario = { id: this.proximoId++, nome: nome, email: email, idade: idade };
        this.usuarios.push(novoUsuario);
        return novoUsuario;
    };
    GerenciadorUsuarios.prototype.atualizarUsuario = function (id, dados) {
        var _a, _b, _c;
        var usuario = this.usuarios.find(function (u) { return u.id === id; });
        if (!usuario)
            throw new Error("Usuário não encontrado.");
        usuario.nome = (_a = dados.nome) !== null && _a !== void 0 ? _a : usuario.nome;
        usuario.email = (_b = dados.email) !== null && _b !== void 0 ? _b : usuario.email;
        usuario.idade = (_c = dados.idade) !== null && _c !== void 0 ? _c : usuario.idade;
        return usuario;
    };
    GerenciadorUsuarios.prototype.removerUsuario = function (id) {
        var indice = this.usuarios.findIndex(function (u) { return u.id === id; });
        if (indice === -1)
            throw new Error("Usuário não encontrado.");
        this.usuarios.splice(indice, 1);
    };
    GerenciadorUsuarios.prototype.listarUsuarios = function () {
        return this.usuarios;
    };
    return GerenciadorUsuarios;
}());
exports.GerenciadorUsuarios = GerenciadorUsuarios;
