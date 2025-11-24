/*
1 - Produtos

Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número).
Em seguida, crie uma classe ItemLoja que implemente essa interface.
No construtor da classe, atribua valores às propriedades id, nome e preco. */
var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    return ItemLoja;
}());
var item = new ItemLoja(1, "Mouse Gamer", 150);
console.log(item);
