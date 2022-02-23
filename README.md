# Teste Pro Franchising

## Sobre o projeto

Teste Técnico para processo seletivo, este projeto consiste na implementação de um CRUD de para produtos e suas receitas, onde é possível adicionar, ler, atualizar e deletar dados de produtos em um banco de dados.

## Tecnologias Utilizadas

#### :link: [Node.js](https://nodejs.org/en/)
#### :link: [Express](https://expressjs.com/pt-br/)
#### :link: [MongoDb](https://www.mongodb.com)

## Pré-Requisitos

Este projeto Utiliza o banco de dados MongoDb, para o perfeito funcionamento é necessário ter o banco de dados em sua máquina. Para instruções sobre a instalação do banco de dados acesse https://www.mongodb.com.

## Instalação

-Clone o repositório através da seguinte chave https: `https://github.com/tuliotrindade/pro-franchising-challenge.git`

-Instale as dependências através do `npm install`.

-Crie um arquivo .env para a coneção com o banco de dados e definição da porta utilizada, com os itens da seguinte forma:
`PORT=3001` `HOST=localhost`

-Para acessar todas as rotas com excessão das rotas de Login, Cadastro e vizualização de produtos é nescessário ter o cargo de administrador no sistema, e apenas um administrador pode conceder a permissão de administração para outros usuários, para registrar o primeiro administrador no banco de dados execute o comando `npm run seed` 

-Para iniciar a aplicação rode o comando `npm run dev` em seu terminal.

## Endpoints

### Criação de usuario e login

#### POST - http://localhost:3001/users/register - Recebe um body com dados do usuário e realiza o cadastro dele no banco de dados.
#### POST - http://localhost:3001/users/login -Recebe informações de login no body da requisição e retorna um token de autenticação.

### CRUD de produtos

#### GET - http://localhost:3001/products/allProducts - Retorna todos imóveis cadastrados.
#### POST - http://localhost:3001/products/add - Recebe todas informações de um produto e o cadastra no banco de dados.
#### DELETE - http://localhost:3001/products/delete/id - Deleta um produto indicado por um id.
#### PUT: - http://localhost:3001/products/update - Recebe um id nos parâmetros da requisição e dados de um produto no body e realiza a atualização do produto com id coorespondente ao enviado como parametro.
## Exemplos de requisições e respostas

Abaixo segue um exemplo de todo fluxo do script e funcionamento dos endpoints.

### Criação de novo usuario

<img src="/src/images/registro.png" alt="cria usuario"/>

### Login

<img src="/src/images/login.png" alt="login"/>

### Para adicionar novos produtos, atualizar ou deletar é preciso estar autenticado com o token retornado apos login e ter a role de administrador.

A autenticação deve ser feita por meio da chave authorization no Header da requisição.
<img src="/src/images/tokenAuthorization.png" alt="autenticação"/>

### Adicionando um novo produto 

<img src="/src/images/createProduct.png" alt="adiciona produto"/>

### Vizualizando todos produtos.

<img src="/src/images/getAllRequisition.png" alt="todos produtos"/>
<img src="/src/images/getAllResponse.png" alt="todos produtos"/>

### Atualizando um Produto

<img src="/src/images/update.png" alt="atualização"/>

### Deletando um Produto

<img src="/src/images/deleteProduct.png" alt="deletar"/>

### Concedendo permissão de administrador para um usuário pelo email cadastrado

<img src="/src/images/changeRole.png" alt="deletar"/>

## Contato 

Túlio Trindade - tuliotrindade99@gmail.com
