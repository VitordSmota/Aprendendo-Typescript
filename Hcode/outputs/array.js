"use strict";
let filmesCategorias = ["Comédia", "Drama", "Romance", "Aventura"];
filmesCategorias.push('Rom');
//filmesCategorias.push(1);
const filmesAnos = [];
for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}
console.log(filmesAnos);
