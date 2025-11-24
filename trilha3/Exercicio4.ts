/*
Exercício 4:
Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.
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
