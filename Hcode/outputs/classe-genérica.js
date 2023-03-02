"use strict";
class CadastroModelo {
    criar(dados) {
        return "criar";
    }
    Pegar(id) {
        return "Pegado";
    }
    editar(id, dadosAtt) {
        return dadosAtt;
    }
    excluir(id) {
        return true;
    }
}
const novoUsuario = new CadastroModelo();
novoUsuario.criar({
    nome: 'string',
    id: 71,
    created_at: new Date(),
    update_at: new Date(),
    email: 'string',
    senha: 'string',
});
