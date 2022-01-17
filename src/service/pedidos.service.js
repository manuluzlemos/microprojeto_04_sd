const { bd } = require('../model/bd');

class PedidosService {
    constructor(bd) {
        this._bd = bd;
    }

    listarPedidos() {
        return this._bd.pedidos;
    }

    solicitarEntrega(data){
        const codigo = parseInt(data.codigo);
        for(let i = 0; i < this._bd.pedidos.length; i++){
            if(this._bd.pedidos[i].codigo === codigo){
                this._bd.pedidos[i].solicitacao_entrega = {
                    rua: data.rua,
                    bairro: data.bairro,
                    cidade: data.cidade
                };
                return {status: `Entrega do pedido ${codigo} solicitada para a Rua ${data.rua}, no bairro ${data.bairro} da cidade ${data.cidade}!`};
            }
        }

        return {status: `O pedido ${codigo} não existe!`};
    }
}

const pedidosService = new PedidosService(bd);

module.exports = {
    pedidosService
};