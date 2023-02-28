"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    Apresentar() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e lecionarei ${this.materia}.`;
    }
    MediadosAlunos(...notas) {
        const totnotas = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        return `soma das notas = ${totnotas}, número de alunos = ${notas.length}, média da sala = ${(totnotas / notas.length).toFixed(2)}  `;
    }
}
const Johnata = new Professor('Johnata', 46, 'Filosofia');
/* console.log(Johnata.Apresentar()) */
console.log(Johnata.MediadosAlunos(10, 10, 10, 10, 9, 8, 7, 9, 7));
