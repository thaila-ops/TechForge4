/*Exercício 1 
Crie uma classe ContaBancaria com os atributos titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.*/

class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    }
}




