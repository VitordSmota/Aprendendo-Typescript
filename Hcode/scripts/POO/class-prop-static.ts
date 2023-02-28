interface IBancodeDados{
    ip: string;
    user: string;
    senha: string;
    tipoBanco: string;
}

class BancoDeDados {

    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQL Server";

    constructor(
        private ip: string,
        private user: string,
        private senha: string,
        private tipoBanco: string,

    ) { }
    static factory(params: IBancodeDados) {
        if (![
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(params.tipoBanco)) {
            throw new Error("Tipo de banco incorreto!");
        }
        if (![
            BancoDeDados.LOCAL
        ].includes(params.ip)) {
            throw new Error("IP inválido.")
        }
        return new BancoDeDados(
            params.ip,
            params.user,
            params.senha,
            params.tipoBanco
        );
    }

}

const conexaoBanco = BancoDeDados.factory({
    ip: BancoDeDados.LOCAL,
    tipoBanco: 'MySQL',
    senha: 'saadsadas',
    user: "Vitor",

})
console.log(conexaoBanco)