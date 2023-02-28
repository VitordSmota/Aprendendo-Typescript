"use strict";
class Veiculo {
    constructor(cor) {
        this.cor = cor;
    }
    opentheDoor() {
        return false;
    }
}
const Carro = new Veiculo('Branco');
console.log(Carro.opentheDoor());
