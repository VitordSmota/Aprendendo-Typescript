interface Categoria{
    nome: string;
    id: number;
    categoriaPai?: Categoria;
}

const frontEnd: Categoria = {
    nome: 'Front-End',
    id: 1
}

const backEnd: Categoria = {
    nome: "Back-End",
    id: 2
}

interface Menu {
    categorias: Categoria[];
}

let menu: Menu = {
    categorias: [frontEnd, backEnd]
};

interface Todo {

    [indice: number]: string;
}
 
 let minhasTarefas: Todo = ["Estudar A", "Estudar B"]

console.log(menu)