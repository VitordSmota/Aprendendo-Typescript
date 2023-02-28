"use strict";
function showError(message) {
    throw new Error(message);
}
//showError("Algo deu errado");
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
//loopInfinito()
