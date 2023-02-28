"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    toque() {
        return "Interfone tocado!";
    }
}
class Casa extends Domicilio {
    entrarNaCasa(mensagem) {
        return this.atender(mensagem);
    }
    atender(mensagem) {
        return mensagem;
    }
}
const CasaDoHomer = new Casa("Rosa", { rua: "X", nrm: "Y", bairro: "Z" });
console.log(CasaDoHomer.entrarNaCasa('oi, quem é?'));
