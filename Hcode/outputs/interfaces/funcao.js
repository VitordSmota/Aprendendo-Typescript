"use strict";
let primeiraSoma;
primeiraSoma = (a, b) => {
    return a + b;
};
let calculadora;
function adicao(a, b) {
    return a + b;
}
calculadora = {
    somar: adicao,
    substrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b,
};
