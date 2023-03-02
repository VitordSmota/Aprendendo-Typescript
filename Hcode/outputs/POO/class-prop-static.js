"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BancodeDados_1 = require("../classes/BancodeDados");
const conexaoBanco = BancodeDados_1.BancoDeDados.factory({
    ip: BancodeDados_1.BancoDeDados.LOCAL,
    tipoBanco: 'MySQL',
    senha: 'saadsadas',
    user: "Vitor",
});
console.log(conexaoBanco);
