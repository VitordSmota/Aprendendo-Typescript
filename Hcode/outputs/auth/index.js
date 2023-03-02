"use strict";
var Auth;
(function (Auth) {
    class LoginRegistro {
        login(usuario) {
            return usuario;
        }
        registro(novoUsuario) {
            return novoUsuario;
        }
    }
    Auth.LoginRegistro = LoginRegistro;
    class Recuperacao {
        recuperarSenha() {
            return "Recuperando Senha";
        }
        recuperarUsuario() {
            return "Recuperando Usuario";
        }
    }
    Auth.Recuperacao = Recuperacao;
})(Auth || (Auth = {}));
