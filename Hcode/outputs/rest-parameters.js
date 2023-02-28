"use strict";
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(somarRenda(100, 100, 100, 200, 200, 400));
