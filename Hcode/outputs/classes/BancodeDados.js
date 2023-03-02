"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoDeDados = void 0;
class BancoDeDados {
    constructor(ip, user, senha, tipoBanco) {
        this.ip = ip;
        this.user = user;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(params) {
        if (![
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(params.tipoBanco)) {
            throw new Error("Tipo de banco incorreto!");
        }
        if (![
            BancoDeDados.LOCAL
        ].includes(params.ip)) {
            throw new Error("IP inválido.");
        }
        return new BancoDeDados(params.ip, params.user, params.senha, params.tipoBanco);
    }
}
exports.BancoDeDados = BancoDeDados;
BancoDeDados.LOCAL = "127.0.0.1";
BancoDeDados.TIPO_MYSQL = "MySQL";
BancoDeDados.TIPO_SQLSERVER = "SQL Server";
