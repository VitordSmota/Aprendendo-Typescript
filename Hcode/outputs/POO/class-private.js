"use strict";
class Banco {
    constructor() {
        this.cofreQtd = 10000;
    }
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return "O cofre não possui a quantidade requisitada";
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.sacarDoCaixa(quantidade);
    }
}
const nubank = new Banco();
console.log(nubank.sacarDoCaixaEletronico(12));
class Banco24horas extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
