interface Modelo{
    id: number;
    createdAt: number;
    updatedAt: number;
}

/* 
interface Pessoa extends Modelo {
    nome: string;
    idade?: number;
    
} */


interface Usuario extends Pessoa{
    email: string;
    senha: string;
}

/* const joao: Usuario = {

    id: 1,
    nome: "Jao",
    email: "jao@gmail.com",
    senha: "123456",
    idade: 30,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTimezoneOffset()
} */
/* console.log(joao) */