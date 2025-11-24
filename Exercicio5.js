/*Exercício 5:
Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.

*/
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionar = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    Agenda.prototype.listar = function () {
        return this.compromissos;
    };
    return Agenda;
}());
