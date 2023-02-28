class Usuario {

    readonly id: string = "sdadasda";
    name: string = "sdadas";
    private password: string = "dasdas";
    readonly dataCadastro: Date = new Date("2022-01-01");
}

const usuario = new Usuario()
// usuario.id ="1111"
console.log(usuario.id)