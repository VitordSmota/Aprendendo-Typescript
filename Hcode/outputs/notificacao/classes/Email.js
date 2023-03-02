"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Android = exports.SMS = exports.Email = void 0;
const Notificacao_1 = require("./Notificacao");
class Email extends Notificacao_1.Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.email}...`);
        return true;
    }
}
exports.Email = Email;
class SMS extends Notificacao_1.Notificacao {
    enviar(usuario) {
        console.log(`Enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
exports.SMS = SMS;
class Android extends Notificacao_1.Notificacao {
    enviar(usuario) {
        console.log(`Send notification to Android user  ${usuario.idAndroid}...`);
        return true;
    }
}
exports.Android = Android;
