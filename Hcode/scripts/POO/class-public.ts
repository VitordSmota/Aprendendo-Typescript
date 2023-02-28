class Veiculo {
    public cor: string

    constructor(cor: string) {
        this.cor = cor;
    }
    public opentheDoor(): boolean {

        return false;
    }
}

const Carro = new Veiculo('Branco')
console.log(Carro.opentheDoor())