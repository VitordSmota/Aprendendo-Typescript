class Permissao {

    constructor(
        private _nome: string,
        private _nivel: number
    ){}

    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(novoNome) {

        if (novoNome.length < 5) {
            throw new Error("o nome da permissão deve ter no mínimo 5 letras.");
        }
        this._nome = novoNome;
        
    }
}
const permissao = new Permissao("Administrador", 1)

console.log(permissao.nome);

