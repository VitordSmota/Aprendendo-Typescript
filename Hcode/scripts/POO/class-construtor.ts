class Pedido {
    constructor(        
            public produto: string,
            public valorTotal: number,
            public previsaoEntrega: Date
    ) {}

}

const meuPedido = new Pedido("Tv 32 pole", 23, new Date('2023-02-27'))

console.log(meuPedido);