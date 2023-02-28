class Domicilio {
    public cor: string;
    public endereco: object;

    constructor(cor: string, endereco: object) {
        this.cor = cor;
        this.endereco = endereco;

    }

    public toque(): string {
        
        return "Interfone tocado!";
    }
}

class Casa extends Domicilio {

    public entrarNaCasa(mensagem: string): string {

       return this.atender(mensagem);
    }
    
    protected atender(mensagem: string): string {

        return mensagem;
    }
}

const CasaDoHomer = new Casa("Rosa", { rua: "X", nrm: "Y", bairro: "Z" });

console.log(CasaDoHomer.entrarNaCasa('oi, quem é?'))
