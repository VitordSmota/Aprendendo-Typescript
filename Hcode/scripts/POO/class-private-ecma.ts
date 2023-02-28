class Documento{
     private valor: number = 12344321;
    #nmr: number = 35;
     
    mostrarNmr(): number{
        return this.#nmr
    }
}

class CNPJ extends Documento {

    // private valor: number = 999999
    #nmr: number = 50;
    
    mostrarNmr(): number{
        return this.#nmr
    }
}
const rg = new Documento()
const cnpj = new CNPJ()
// console.log( rg.valor);
