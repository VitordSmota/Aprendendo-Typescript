"use strict";
class Pessoa {
    constructor(nome, age, altura) {
        this.nome = nome;
        this.age = age;
        this.altura = altura;
    }
}
const Ronaldo = new Pessoa("Ronaldo", 30, 1.80);
console.log(Ronaldo);
