/*Exercício 1
Crie uma classe ContaBancaria com os atributos titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.*/
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente!");
        }
    };
    return ContaBancaria;
}());
