"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = require("./applyMixins");
class ProdutoF {
    vender() {
        return 'Vendido';
    }
}
class Movel {
    sentar() {
        return 'Sentado';
    }
}
class Sofa {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixins_1.applyMixins)(Sofa, [ProdutoF, Movel]);
const meuSofa = new Sofa('oi');
console.log(meuSofa.vender());
console.log(meuSofa.sentar());
console.log(meuSofa.nome);
