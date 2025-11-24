/*3 - Cadastro e Busca de Produtos em uma Loja:

Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).
Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.
Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined
Dica: pesquisar sobre o método find https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/
var Loja = /** @class */ (function () {
    function Loja() {
        this.produtos = [];
    }
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.produtos.find(function (p) { return p.codigo === codigo; });
    };
    return Loja;
}());
var loja = new Loja();
loja.adicionarProduto({ codigo: 10, nome: "Camiseta" });
loja.adicionarProduto({ codigo: 20, nome: "Calça" });
console.log(loja.buscarProdutoPorCodigo(20)); // encontrado
console.log(loja.buscarProdutoPorCodigo(5)); // undefined
