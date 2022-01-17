const { pedidosService } = require('../service/pedidos.service');

class PedidosController {
    listar() {
        return (request, response) => {
            response.json(pedidosService.listarPedidos());
        };
    }

    entregar(){
        return (request, response) => {
            const data = request.body;

            response.json(pedidosService.solicitarEntrega(data));
        };
    }
}

const pedidosController = new PedidosController();

module.exports = {
    pedidosController
};
