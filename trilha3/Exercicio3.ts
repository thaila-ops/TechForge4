/* Exercício 3:
Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.
 */

class Pagamento {
    processar() {
        console.log("Processando pagamento...");
    }
}

class PagamentoCartao extends Pagamento {
    constructor(private numero: string) {
        super();
    }

    processar() {
        if (this.numero.length === 16) {
            console.log("Pagamento por cartão aprovado!");
        } else {
            console.log("Número de cartão inválido!");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar() {
        console.log("Gerando boleto...");
        console.log("Código: 23790.12345.98765.000123.456789");
    }
}

function processarPagamentos(pagamentos: Pagamento[]) {
    pagamentos.forEach(p => p.processar());
}

// Teste
processarPagamentos([
    new PagamentoCartao("1234567812345678"),
    new PagamentoBoleto()
]);
