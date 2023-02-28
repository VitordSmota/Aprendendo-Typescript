"use strict";
class Notificacaov2 {
}
class Emailv2 extends Notificacao {
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.telefone}...`);
        return true;
    }
}
class Telefone extends Notificacao {
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar() {
        console.log(`Enviando SMS para o usuario ${this.numero}...`);
        return true;
    }
}
new Emailv2({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
}).enviar();
new Telefone({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
}).enviar();
