import { IMeuUsuario } from "../../interfaces/IMeuUsuario";
import  Notificacao  from "./Notificacao";

export class Email extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        
        console.log(`Enviando e-mail para o usuario ${usuario.email}...`)

        return true;
    }

    
}
export class SMS extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        
        console.log(`Enviando SMS para o usuario ${usuario.telefone}...`)

        return true;
    }

    
}
export class Android extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        
        console.log(`Send notification to Android user  ${usuario.idAndroid}...`)

        return true;
    }

    
}