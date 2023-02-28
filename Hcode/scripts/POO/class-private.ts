class Banco {
  private cofreQtd: number = 10000;

  private debitarCofre(quantidade: number):(number|string) {
    if (this.cofreQtd >= quantidade) {
      this.cofreQtd -= quantidade;

      return this.cofreQtd;
    } else {
      return "O cofre não possui a quantidade requisitada";
    }
    }
    
    protected sacarDoCaixa(quantidade: number):(number|string ) {
        return this.debitarCofre(quantidade)
    }

    public sacarDoCaixaEletronico(quantidade: number):(number|string ) {
        return this.sacarDoCaixa(quantidade)
    }
}

const nubank = new Banco();
console.log(nubank.sacarDoCaixaEletronico(12));

class Banco24horas extends Banco{

    sacar(qtd: number): (number | string) {
        
        return this.sacarDoCaixa(qtd);
    }
}