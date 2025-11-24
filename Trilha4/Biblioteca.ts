/*5 - Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:

Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
Implemente os seguintes métodos:
filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.
Resposta*/

interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];

    constructor(livros: LivroBiblioteca[]) {
        this.livros = livros;
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(l => l.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(l => l.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(l => l.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}


const gestao = new BibliotecaGestao([
    { titulo: "Harry Potter", autor: "J.K. Rowling", genero: "Fantasia", disponivel: true },
    { titulo: "Senhor dos Anéis", autor: "Tolkien", genero: "Fantasia", disponivel: false },
    { titulo: "O Hobbit", autor: "Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Fábula", disponivel: true }
]);

console.log(gestao.filtrarPorGenero("Fantasia"));
console.log(gestao.buscarPorAutor("Tolkien"));
console.log(gestao.obterLivrosDisponiveisOrdenados());
