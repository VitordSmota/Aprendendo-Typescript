/// <reference path="./auth/index.ts"/>

const novoRegistro = new Auth.LoginRegistro();


const resultadoRegistro = novoRegistro.registro({
    email: "Vitor@gmail.com",
    senha: 'asasdadas',
    nome: "Vitor",
    dataNascimento: new Date(2023, 9, 7)
});

console.log(resultadoRegistro)