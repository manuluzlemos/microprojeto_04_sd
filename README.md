# Microprojeto 04 - Sistemas Distribuídos 2021.2

**Discente**: Emanuelle Lemos

### **Descrição:**

Implementação de um serviço de supermercado delivery com padrão ***REST*** para fins de comunicação entre cliente e servidor.


### **Funcionalidades obrigatórias:**

* Listar os produtos disponíveis:
    - listar o código, o nome e o preço dos produtos em catálogo.
* Adicionar produto ao carrinho:
    - adicionar o código e a quantidade de itens do produto.
* Remover produto do carrinho:
    - remover com base no código do produto.
* Pagar o pedido:
    - insere o código, o valor total do pedido e a quantidade de produtos em uma lista para posterior solicitação de entrega;
    - seta o status de entrega como ***null***;
    - remove os produtos do carrinho;
    - fornece o total pago.
* Solicitar entrega:
    - solicitar a entrega do pedido fornecendo seu código e dados de endereço (rua, bairro e cidade).


### **Funcionalidades extras:**

* Cadastrar produtos no catálogo:
    - cadastro de produtos (código, nome e preço) no catálogo.
* Listar os produtos adicionados ao carrinho:
    - listar o código e a quantidade dos produtos do carrinho.
* Listar os pedidos realizados:
    - listar o código do pedido, o preço total, a quantidade de produtos e o status de entrega dos pedidos efetuados.

### **Rotas**

* **/**: servidor web principal.
* **/catalogo**: rotas para gerenciamento do catálogo de produtos.
    - **/listar**: rota get para listar os produtos em catálogo.
    - **/cadastrar**: rota post para cadastrar um produto no catálogo (codigo, nome e preço).
* **/carrinho**: rotas para gerenciamento do carrinho.
    - **/exibir**: rota get que mostra os produtos adicionados ao carrinho.
    - **/adicionar**: rota post para adicionar um produto existente ao carrinho (código e quantidade).
    - **/remover**: rota delete que remove o produto com base no código.
    - **/pagar**: rota get para pagar o pedido que tem como retorno o preço total da compra.
* **/pedidos**: rotas para gerenciamento dos pedidos realizados 
    - **/listar**: rota get para listar os pedidos realizados.
    - **/entrega**: rota post para solicitar a entrega de um pedido com base no código e informações de endereço.

### **Exemplo das estruturas**

- Produto do catálogo
    
    ```
    produto = {
            codigo: 1,
            nome: 'Manteiga',
            preco: 8.99
        }
    ```

- Produto no carrinho

    ```
    produto = {
            codigo: 1,
            quantidade: 4
        }
    ```

- Pedido no ato do pagamento
    ```
    pedido = {
            codigo: 1,
            quantidade_produtos: 4,
            total: 125.75,
            solicitacao_entrega: null
        }
    ```

- Pedido após solicitação da entrega
    ```
    pedido = {
            codigo: 1,
            quantidade_produtos: 4,
            total: 125.75,
            solicitacao_entrega: {
                rua: "Rua Principal, n 10",
                bairro: "Maioba",
                cidade: "Paço do Lumiar - MA"
            }
        }
    ```
    

### **Instruções para rodar localmente**

1) Baixar o repositório:

    ```
    git clone https://github.com/manuluzlemos/microprojeto_04_sd.git
    ```

2) Instalar as dependências:

    ```
    yarn install 
    ```

    ou

    ```
    npm install
    ```

3) Rodar o servidor

    ```
    yarn start
    ```

4) Funcionamento da aplicação
    
    ```
    http://localhost:3000
    ```

#### Observações:
* Para utilizar a aplicação, pode-se colocar o ***http://localhost:3000*** no browser, pois o mesmo será redirecionado para o arquivo './src/index.html' que, por sua vez, apresenta os formulários para realizar testes das rotas supracitadas.

