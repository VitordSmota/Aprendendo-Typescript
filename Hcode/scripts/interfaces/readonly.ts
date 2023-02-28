interface ICurso {
   readonly titulo: string;
    descricao?: string;
   readonly preco: number;
    cargaHoraria: number;
    classificacao: number;
}

const curso: ICurso = {
    titulo: "TypeScript",
    preco: 5000,
    cargaHoraria: 10,
    classificacao: 5
}