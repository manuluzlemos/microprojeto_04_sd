const { bd } = require('../model/bd');

class CarrinhoService {
    constructor(bd) {
        this._bd = bd;
    }

    exibirCarrinho() {
        return this._bd.carrinho;
    }

    adicionarProduto(codigo, quantidade) {
        let prod = this._bd.catalogo.find(produto => produto.codigo === codigo);
        
        if(!prod)
            return {status: `O código ${codigo} não existe no catálogo!`}

        this._bd.carrinho.push({
            codigo: codigo,
            quantidade: quantidade
        });
        return this._bd.carrinho;
        
    }

    removerProduto(codigo){
        let prod = this._bd.carrinho.find(produto => produto.codigo === codigo);

        if(!prod)
            return {status: `Produto ${codigo} não encontrado!`};
        
        let indice = this._bd.carrinho.indexOf(prod);
        this._bd.carrinho.splice(indice, 1);
        return {status: `Produto ${codigo} removido!`};        
    }

    getPreco(codigo){
        for(let i = 0; i < this._bd.catalogo.length; i++){
            if(this._bd.catalogo[i].codigo === codigo){
                return this._bd.catalogo[i].preco;
            }
        }

        return 0;
    }

    realizarPagamento(){
        if(this._bd.carrinho.length === 0){
            return {status: "O carrinho está vazio!"};
        }

        let total =0;
        for(let i = 0; i < this._bd.carrinho.length; i++){
            total += (this._bd.carrinho[i].quantidade * this.getPreco(this._bd.carrinho[i].codigo));
        }

        this._bd.pedidos.push({
            codigo: this._bd.pedidos.length + 1,
            quantidade_produtos: this._bd.carrinho.length,
            total: total,
            solicitacao_entrega: null
        });

        this._bd.carrinho = [];

        return {status : `Pagamento efetuado no valor de R$ ${total.toFixed(2)}`};
    }
}

const carrinhoService = new CarrinhoService(bd);

module.exports = {
    carrinhoService
};