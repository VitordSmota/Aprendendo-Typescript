"use strict";
class CadastroModelo {
    criar(dados) {
        console.log(dados);
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
class UsuarioModelo extends CadastroModelo {
}
const novoUsuario = new UsuarioModelo();
novoUsuario.criar({
    nome: 'string',
    id: 71,
    created_at: new Date(),
    update_at: new Date(),
    email: 'string',
    senha: 'string',
});
class CategoriaModelo extends CadastroModelo {
}
const novaCategoria = new CategoriaModelo();
novaCategoria.criar({
    nome: "Produto",
    id: 12,
    created_at: new Date(),
    update_at: new Date(),
});
