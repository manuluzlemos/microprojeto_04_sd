const { carrinhoService } = require('../service/carrinho.service');

class CarrinhoController {
    exibir() {
        return (request, response) => {
            response.json(carrinhoService.exibirCarrinho());
        };
    }

    adicionar() {
        return (request, response) => {
            const { codigo, quantidade } = request.body;

            response.json(carrinhoService.adicionarProduto(codigo, quantidade));
        };
    }

    remover(){
        return (request, response) => {
            const { codigo } = request.params;

            response.json(carrinhoService.removerProduto(parseInt(codigo)));
        };
    }

    pagar(){
        return (request, response) => {
            response.json(carrinhoService.realizarPagamento());
        }
    }
}

const carrinhoController = new CarrinhoController();

module.exports = {
    carrinhoController
};
