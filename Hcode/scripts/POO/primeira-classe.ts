class Pessoa {
    nome: string;
    age: number;
    altura: number;
    
    constructor(nome: string, age: number, altura: number){
       this.nome = nome;
       this.age = age; 
       this.altura = altura;
    }
}

const Ronaldo = new Pessoa("Ronaldo", 30, 1.80)
console.log(Ronaldo)