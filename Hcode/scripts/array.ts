let filmesCategorias: string[] = ["Comédia", "Drama", "Romance", "Aventura"];

filmesCategorias.push('Rom');
//filmesCategorias.push(1);



const filmesAnos: Array<number> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++){
    filmesAnos.push(ano)
}
console.log(filmesAnos)
