# API de Filmes

Esta é uma API construída com NestJS para consultar informações sobre filmes a partir da APi OMDb.

## Configuração

Antes de iniciar a aplicação, certifique-se de instalar todas as dependências usando npm:

npm install

## Execução
Para executar a aplicação em modo de desenvolvimento, utilize o seguinte comando:

npm run start:dev

## Testes
Para executar os testes unitários, utilize o seguinte comando:

npm run test

## Endpoints
GET /movie
Este endpoint retorna informações sobre um filme com base no título fornecido.

Parâmetros de consulta
title (obrigatório): O título do filme a ser pesquisado.
http://localhost:3000/movie?title=nome%20filme

## Documentação
A documentação da API pode ser acessada na rota /api. Ela foi gerada automaticamente usando o Swagger.

Acesse http://localhost:3000/api para visualizar a documentação e testar a api.

## Licença
Este projeto está licenciado sob a MIT License.

Este README fornece uma breve visão geral da aplicação, incluindo instruções para configuração, execução, teste, descrição dos endpoints disponíveis, documentação da API, orientações de contribuição e informações de licença.

Você pode personalizar ainda mais o README conforme necessário, adicionando informações específicas sobre a sua aplicação, como requisitos de sistema, exemplos de uso adicionais, detalhes sobre a estrutura do projeto, entre outros. Certifique-se de adaptar o conteúdo para atender às necessidades e peculiaridades da sua aplicação.
