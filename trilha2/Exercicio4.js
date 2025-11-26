/*Exercício 4:
Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.

*/
var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.paraFahrenheit = function () {
        return (this.valor * 9 / 5) + 32;
    };
    Temperatura.prototype.paraKelvin = function () {
        return this.valor + 273.15;
    };
    return Temperatura;
}());
