interface IProdutos{
    nome: string,
    preco: number,
    descricao?: string,
    data: Date
}


const CremeNivea: IProdutos = {
    nome: "Firmador",
    preco: 29.90,
    descricao: "Q10 + Vitamina C",
    data: new Date()
    
}
console.log(CremeNivea)