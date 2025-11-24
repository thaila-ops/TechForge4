/*5 - Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:

Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
Implemente os seguintes métodos:
filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.
Resposta*/
var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao(livros) {
        this.livros = livros;
    }
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (l) { return l.genero === genero; });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (l) { return l.autor === autor; });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (l) { return l.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
var gestao = new BibliotecaGestao([
    { titulo: "Harry Potter", autor: "J.K. Rowling", genero: "Fantasia", disponivel: true },
    { titulo: "Senhor dos Anéis", autor: "Tolkien", genero: "Fantasia", disponivel: false },
    { titulo: "O Hobbit", autor: "Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Fábula", disponivel: true }
]);
console.log(gestao.filtrarPorGenero("Fantasia"));
console.log(gestao.buscarPorAutor("Tolkien"));
console.log(gestao.obterLivrosDisponiveisOrdenados());
