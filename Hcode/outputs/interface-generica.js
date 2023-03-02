"use strict";
const string = {
    valor: "hcode",
    realizarProcessamento(argumento) {
        return argumento.toUpperCase();
    }
};
console.log(string.valor);
console.log(string.realizarProcessamento("hcode treinamento"));
