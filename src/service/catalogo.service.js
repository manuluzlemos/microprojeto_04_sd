const { bd } = require('../model/bd');

class CatalogoService {
    constructor(bd) {
        this._bd = bd;
    }

    listarCatalogo() {
        return this._bd.catalogo;
    }

    cadastrarProduto(produto) {
        this._bd.catalogo.push(produto);

        return this._bd.catalogo;
    }
}

const catalogoService = new CatalogoService(bd);

module.exports = {
    catalogoService
};