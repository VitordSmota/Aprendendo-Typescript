"use strict";
class Permissao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(novoNome) {
        if (novoNome.length < 5) {
            throw new Error("o nome da permissão deve ter no mínimo 5 letras.");
        }
        this._nome = novoNome;
    }
}
const permissao = new Permissao("Administrador", 1);
console.log(permissao.nome);
