/*Exercício 5:
Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.
*/
class Animal {
    private energia: number = 50;

    protected comer(qtd: number) {
        this.energia += qtd;
    }

    protected gastarEnergia(qtd: number) {
        this.energia -= qtd;
    }

    statusEnergia() {
        console.log("Energia:", this.energia);
    }
}

class Leao extends Animal {
    comer() {
        this.gastarEnergia(10);
        super.comer(20);
        console.log("Leão caçou e comeu!");
    }
}

class Passaro extends Animal {
    comer() {
        super.comer(5);
        console.log("Pássaro se alimentou!");
    }
}

// Teste
const leao = new Leao();
const passaro = new Passaro();

leao.comer();
passaro.comer();

leao.statusEnergia();
passaro.statusEnergia();
