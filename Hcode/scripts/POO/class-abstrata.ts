interface IMeuUsuario{
    nome: string;
    email: string;
    telefone: string;
    idAndroid?: string;
}

abstract class Notificacao {

    abstract enviar(usuario:IMeuUsuario): boolean;
}

class Email extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        
        console.log(`Enviando e-mail para o usuario ${usuario.email}...`)

        return true;
    }

    
}
class SMS extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        
        console.log(`Enviando SMS para o usuario ${usuario.telefone}...`)

        return true;
    }

    
}

class Android extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        
        console.log(`Send notification to Android user  ${usuario.idAndroid}...`)

        return true;
    }

    
}
new Email().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
})
new SMS().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497"
})
new Android().enviar({
    nome: "Vitor",
    email: "vitormota05@gmail.com",
    telefone: "11997159497",
    idAndroid: "212sdadasdade23r42#$%¨&*&¨%$#@#$%¨&*deded",
})