/*Exercício 4: 
Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.

*/
class Temperatura {
    valor: number; // em Celsius

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    paraKelvin(): number {
        return this.valor + 273.15;
    }
}
