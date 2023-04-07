Neste projeto desenvolvi o backend de um site informativo sobre partidas e classificações de futebol.

Fui responsável por desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados em MySQL.

O back-end foi desenvolvido em ambiente dockerizado utilizando modelagem de dados através do Sequelize e implementou regras de negócio para popular adequadamente a tabela disponível no front-end que é exibida para a pessoa usuária do sistema.

## Orientações ##
O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - MySQL em ambiente dockerizado já configurado no docker-compose através de um serviço definido como `db`.
  - Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`;

2️⃣ **Back-end:**
 - Roda na porta `3001` em ambiente dockerizado já configurado no docker-compose através de um serviço definido como `backend`

3️⃣ **Front-end:**
  - O front foi desenvolvido pelo time da Trybe é acessado pela url `http://localhost:3000/`;
  - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints que eu construí.

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) 
  
### Para rodar a aplicação ###
> Na raiz do projeto rode o comando `npm run compose:up`;

