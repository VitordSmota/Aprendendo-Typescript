import { BancoDeDados } from "../classes/BancodeDados"







const conexaoBanco = BancoDeDados.factory({
    ip: BancoDeDados.LOCAL,
    tipoBanco: 'MySQL',
    senha: 'saadsadas',
    user: "Vitor",

})
console.log(conexaoBanco)