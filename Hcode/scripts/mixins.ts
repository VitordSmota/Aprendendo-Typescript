import { applyMixins } from "./applyMixins";


class ProdutoF {

    vender() {
        return 'Vendido'
    }

    
}

class Movel {

    sentar(){
        return 'Sentado';
    }

    
}
class Sofa {
    constructor(public nome: string){}
}
interface Sofa extends ProdutoF, Movel {}
applyMixins(Sofa, [ProdutoF, Movel])


const meuSofa = new Sofa('oi');
console.log(meuSofa.vender());
console.log(meuSofa.sentar())
console.log(meuSofa.nome);
