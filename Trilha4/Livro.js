/*4 - Sistema de Biblioteca com Checagem de Disponibilidade:

Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true.
Dica: pesquisar pelo método filter https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
var Biblioteca = /** @class */ (function () {
    function Biblioteca(livros) {
        this.livros = livros;
    }
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var bib = new Biblioteca([
    { titulo: "Dom Casmurro", autor: "Machado", disponivel: true },
    { titulo: "1984", autor: "George Orwell", disponivel: false }
]);
console.log(bib.buscarLivrosDisponiveis());
