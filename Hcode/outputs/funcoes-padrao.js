"use strict";
function enviarEmail(para, assunto = 'Sem assunto', remetente) {
    console.log({
        para,
        assunto
    });
}
enviarEmail('joaoemail@email.com');
