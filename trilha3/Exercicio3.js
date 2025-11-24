/* Exercício 3:
Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () {
        console.log("Processando pagamento...");
    };
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numero) {
        var _this = _super.call(this) || this;
        _this.numero = numero;
        return _this;
    }
    PagamentoCartao.prototype.processar = function () {
        if (this.numero.length === 16) {
            console.log("Pagamento por cartão aprovado!");
        }
        else {
            console.log("Número de cartão inválido!");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagamentoBoleto.prototype.processar = function () {
        console.log("Gerando boleto...");
        console.log("Código: 23790.12345.98765.000123.456789");
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamentos(pagamentos) {
    pagamentos.forEach(function (p) { return p.processar(); });
}
// Teste
processarPagamentos([
    new PagamentoCartao("1234567812345678"),
    new PagamentoBoleto()
]);
