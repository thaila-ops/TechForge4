"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*3. Gerenciador de Favoritos
Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].

Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista.
abstract class FavoriteManager */
class FavoriteManager {
}
class MoviesFavoriteManager extends FavoriteManager {
    constructor() {
        super(...arguments);
        this.favorites = new Set();
    }
    addFavorite(item) {
        this.favorites.add(item);
    }
    getFavorites() {
        return Array.from(this.favorites).sort();
    }
}
class BooksFavoriteManager extends FavoriteManager {
    constructor() {
        super(...arguments);
        this.favorites = [];
    }
    addFavorite(item) {
        if (!this.favorites.includes(item))
            this.favorites.unshift(item);
    }
    getFavorites() {
        return this.favorites;
    }
}
const filmes = new MoviesFavoriteManager();
filmes.addFavorite("Avatar");
filmes.addFavorite("Batman");
filmes.addFavorite("Avatar");
console.log(filmes.getFavorites());
const livros = new BooksFavoriteManager();
livros.addFavorite("Dom Casmurro");
livros.addFavorite("1984");
livros.addFavorite("Dom Casmurro");
console.log(livros.getFavorites());
//# sourceMappingURL=Gerenciador.js.map