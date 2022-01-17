const DataValidation = require('./middleware/dataValidation');

const { catalogoController } = require('./controller/catalogo.controller');
const { carrinhoController } = require('./controller/carrinho.controller');
const { pedidosController } = require('./controller/pedidos.controller');

const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

//Rotas do tipo /catalogo
app.get("/catalogo/listar", catalogoController.listar());
app.post("/catalogo/cadastrar", DataValidation.validate, catalogoController.cadastrar());

//Rotas do tipo /carrinho
app.get("/carrinho/exibir", carrinhoController.exibir());
app.post("/carrinho/adicionar", carrinhoController.adicionar());
app.delete("/carrinho/remover/:codigo", carrinhoController.remover());
app.get("/carrinho/pagar", carrinhoController.pagar())

//Rotas do tipo /pedidos
app.get("/pedidos/listar", pedidosController.listar());
app.post("/pedidos/entrega/", pedidosController.entregar());

module.exports = {
    app,
};