# MCP Server - Star Wars API ![Yarn](https://img.shields.io/badge/yarn-active-blue?logo=yarn) ![License](https://img.shields.io/badge/license-ISC-green)

Servidor MCP (Model Context Protocol) para consultas ao universo Star Wars via [SWAPI](https://swapi.bry.com.br/documentation). Ideal para integrações, estudos e demonstrações de arquitetura em camadas com Node.js/TypeScript.

## Sumário
- [MCP Server - Star Wars API  ](#mcp-server---star-wars-api--)
  - [Sumário](#sumário)
  - [Sobre o Projeto](#sobre-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Como executar](#como-executar)
  - [Scripts disponíveis](#scripts-disponíveis)
  - [Sobre a SWAPI](#sobre-a-swapi)
    - [Exemplos de uso da API](#exemplos-de-uso-da-api)
  - [Contribuição](#contribuição)
  - [Licença](#licença)
  - [Créditos](#créditos)

## Sobre o Projeto

- Inspirado no projeto base do canal Código Fonte TV (veja créditos abaixo).
- Reimplementado para consumir a API pública SWAPI, trazendo informações sobre personagens, filmes, naves, veículos, espécies e planetas do universo Star Wars.
- Desenvolvido em Node.js/TypeScript, seguindo arquitetura em camadas (DDD):
  - **Domain**: Modelos de domínio.
  - **Infrastructure**: Serviços de integração com a SWAPI.
  - **Application**: Lógica de negócio e formatação dos dados.
  - **Interface**: Controladores MCP e validação de entrada.
  - **main.ts**: Ponto de entrada do servidor MCP.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (>= 18)
- [Yarn](https://yarnpkg.com/)

## Como executar

1. Instale as dependências:
   ```bash
   yarn install
   ```
2. Faça o build do projeto:
   ```bash
   yarn build
   ```
3. Configure o `client` para se comunicar com mcp-server, mais informações, [clique aqui](https://modelcontextprotocol.io/quickstart/server#node).

O servidor ficará disponível via stdio, pronto para receber requisições MCP.

## Scripts disponíveis

Os principais scripts configurados no `package.json` para uso com Yarn são:

- `yarn build`: Compila o projeto TypeScript para JavaScript na pasta `build/`.
- `yarn test`: Executa os testes automatizados com Jest.

Você pode rodar os scripts assim:

```bash
yarn build   # Compila o projeto
yarn test    # Executa os testes
```

## Sobre a SWAPI

A [SWAPI](https://swapi.bry.com.br/documentation) é uma API REST aberta, sem autenticação, que fornece dados do universo Star Wars. Principais recursos disponíveis:

- **People** (`/people/`): Personagens icônicos como Luke Skywalker, Darth Vader, etc.
- **Films** (`/films/`): Informações sobre os filmes da saga.
- **Starships** (`/starships/`): Naves espaciais.
- **Vehicles** (`/vehicles/`): Veículos terrestres e aéreos.
- **Species** (`/species/`): Espécies do universo Star Wars.
- **Planets** (`/planets/`): Planetas famosos como Tatooine, Hoth, Naboo, etc.

### Exemplos de uso da API

- Buscar um personagem:
  ```bash
  curl https://swapi.bry.com.br/api/people/1/
  # Retorna dados de Luke Skywalker
  ```
- Buscar um planeta:
  ```bash
  curl https://swapi.bry.com.br/api/planets/1/
  # Retorna dados de Tatooine
  ```
- Buscar por nome:
  ```bash
  curl "https://swapi.bry.com.br/api/people/?search=leia"
  # Busca personagens com nome contendo 'leia'
  ```

## Contribuição

Contribuições são bem-vindas! Para contribuir:
- Faça um fork do projeto
- Crie uma branch com sua feature ou correção
- Envie um pull request
- Abra issues para sugestões ou bugs

## Licença

Distribuído sob a licença ISC. Veja o arquivo LICENSE para mais detalhes.

## Créditos

Este projeto foi baseado no exemplo do canal [Código Fonte TV](https://youtu.be/NUOzYPSNaNk), adaptado para consumir a SWAPI.

Para mais detalhes sobre a SWAPI, acesse a [documentação oficial](https://swapi.bry.com.br/documentation).

---

> Feito com ☕ por Gustavo Freitas. Dúvidas ou sugestões: [LinkedIn](https://www.linkedin.com/in/gustafsilva/)
