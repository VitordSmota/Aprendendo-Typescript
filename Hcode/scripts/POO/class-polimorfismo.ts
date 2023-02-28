class Empresa {
    prestarServico(){
        return "Empresa prestando serviço";
    }
}

class Padaria extends Empresa {
    prestarServico(): string {
        return "Vendendo Pão";
    }
}

console.log(new Padaria().prestarServico())
console.log(new Empresa().prestarServico())