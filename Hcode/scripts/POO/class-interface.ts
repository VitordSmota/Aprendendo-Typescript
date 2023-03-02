/* interface IEmailv2 {
    nome: string;
    email: string;
}

interface INotificationv2 {
    enviar(usuario: IMeuUsuariov2): boolean;
}

interface IMeuUsuariov2{
    nome: string;
    email: string;
    telefone: string;
    idAndroid?: string;
}
interface ITelefone {
    numero: string;
}


abstract class Notificacaov2{

    abstract enviar(): boolean;
}

class Emailv2 extends Notificacao  implements INotificationv2, IEmailv2{
     nome: string;
     email: string;

    constructor(usuario: IMeuUsuariov2) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }

    enviar(usuario: IMeuUsuariov2): boolean {
        
        console.log(`Enviando e-mail para o usuario ${usuario.telefone}...`)

        return true;
    }

    
}
class Telefone extends Notificacao implements ITelefone {

    numero: string;

    constructor(usuario: IMeuUsuariov2) {
        super();
        this.numero = usuario.telefone;
    }

    enviar(): boolean {
        
        console.log(`Enviando SMS para o usuario ${this.numero}...`)

        return true;
    }

    
}



new Emailv2({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
}).enviar()
new Telefone({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
}).enviar()
 */