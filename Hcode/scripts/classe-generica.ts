interface ICadastroModelo {
     nome: string;
    readonly id: number;
    readonly created_at : Date;
    readonly update_at: Date;
}


interface ICadastroUsuario extends ICadastroModelo {


    email: string;
    senha: string;
   
}
interface ICadastroCategoria  extends ICadastroModelo {}

class CadastroModelo<T> {

    criar(dados: T): T{
        console.log(dados);
        return "criar" as T

    }

    Pegar(id: number): T{
        return "Pegado" as T;
    }

    editar(id: number, dadosAtt: T): T{
        return dadosAtt;
    }
    excluir(id: number): boolean{
        return true;
    }

}
class UsuarioModelo extends CadastroModelo<ICadastroUsuario>{}
const novoUsuario = new UsuarioModelo()

novoUsuario.criar({
     nome: 'string',
     id: 71,
     created_at : new Date(),
     update_at: new Date(),
    email: 'string',
    senha: 'string',
})
class CategoriaModelo extends CadastroModelo<ICadastroCategoria>{ }

const novaCategoria = new CategoriaModelo();

novaCategoria.criar({

     nome: "Produto",
     id: 12,
     created_at : new Date(),
    update_at: new Date(),
     
    
})
