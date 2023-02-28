interface ISoma {
    (num1: number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (a,b): number  => {
       return a + b
}


interface ICalculos {
    somar(a: number, b: number): number;
    substrair(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: ICalculos;

function adicao(a: number, b: number): number {
    return a + b
}

calculadora = {

    somar:adicao,
    substrair:(a: number, b: number): number => a - b,
    multiplicar:(a: number, b: number): number => a * b,
    dividir:(a: number, b: number): number => a / b,
    
}