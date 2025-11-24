/*Exercício 5: 
Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.

*/

class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionar(compromisso: string) {
        this.compromissos.push(compromisso);
    }

    listar() {
        return this.compromissos;
    }
}
