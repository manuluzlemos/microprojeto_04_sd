const { catalogoService } = require('../service/catalogo.service');

class CatalogoController {
    listar() {
        return (request, response) => {
            response.json(catalogoService.listarCatalogo());
        };
    }

    cadastrar() {
        return (request, response) => {
            const produto = request.body;

            response.json(catalogoService.cadastrarProduto(produto));
        };
    }
}

const catalogoController = new CatalogoController();

module.exports = {
    catalogoController
};
