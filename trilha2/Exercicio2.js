/*Exercício 2:
Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.

*/
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    Livro.prototype.marcarComoLido = function () {
        this.lido = true;
    };
    return Livro;
}());
