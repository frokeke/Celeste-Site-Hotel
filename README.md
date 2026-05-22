# Celeste, hub de hoteis

Esta API foi feita completamente em [Node.js](https://nodejs.org/pt-br/download), ou seja, para que este código seja utilizado é necessário instalar a linguagem e, após a clonagem do repositório, irá executar os seguintes códigos no terminal(o segundo e o terceiro código só funcionaram se seguir os parâmetros para a criação do arquivo .env):

```
npm install dependencies
npx prisma generate
npx prisma db push
```

Após isto, para inicializar o servidor, será inserido o código:

```
node src/server.js          // constando que tenha mantido a integridade estrutural do código, caso não tenha, é apenas digitar o caminho até o arquivo server.js
```

Feito isso, o servidor está rodando. Caso não tenha feito alterações no código da porta de saída, a API funcionará pelo link _"http://localhost:3000>"_
