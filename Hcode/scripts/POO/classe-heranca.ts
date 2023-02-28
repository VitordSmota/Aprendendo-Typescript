class Cadastro {
    nome: string;
    nascimento: Date;

    constructor(nome:string, nascimento:Date){
        this.nome = nome;
        this.nascimento = nascimento;

    }
}

class Cliente extends Cadastro{
    email: string;
    empresa:string;
    
    constructor(nome:string, nascimento: Date, email: string, empresa: string) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}

const jao = new Cliente(
    'Jao',
    new Date(1999,
        6, 10),
    'jaogmail.com',
    'Americanas');
console.log(jao)