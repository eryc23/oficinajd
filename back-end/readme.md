# Servidor Back-end

Servidor criado para interagir com front-end e aplicativo, onde recebe requisições a partir das rotas ``/login``, ``/message`` e que realiza emissão de evento socket ``message`` para atualizar em tempo real a tela de mensagens. O servidor recebe as requisições de login e então retorna com usuário digitado e link com avatar usando gerador de avatar [dicebear](https://avatars.dicebear.com).

## Tecnologias

##### Linguagem/Interpretador

* [Node.js v16.17.0](https://nodejs.org/pt-br/)

##### Bibliotecas/Módulos
As seguintes tecnologias foram utilizadas para desenvolver servidor/back-end:
#
| Biblioteca | Versão | Usabilidade |
| ------ | -------- | ------------ |
| [prisma](https://www.prisma.io/docs/concepts/components/prisma-client) | 4.1.1 | Utilizado para gerir conexão e gerenciamento do banco de dados |
| [Cors](https://github.com/expressjs/cors) | 2.8.5 | Usado como middleware para  gerir e liberar requisições externas. |
| [Express](https://expressjs.com/pt-br/) | 4.18.1 | Usado para criar servidor com rotas que possam ser acessiveis a partir de link |
| [socket.io](https://socket.io/) | 4.5.1 | Usado para conexão real-time com servidor/cliente, atualmente criando eventos de envio das mensanges. |


## Variáveis de Ambiente
A instação possui algumas variáveis de ambiente que deve ser instanciadas.
```ini
PORT='Porta utilizada pelo serviço'
DATABASE_URL='Link da conexão com banco de dados'
```

## Instalação

Realize clone do repositorio, instale as dependências para iniciar servidor

```sh
git clone https://github.com/eryc23/oficinajd.git
cd oficinajd/back-end
npm install

//execute para ambiente de desenvolvimento
npm run dev

//execute para ambiente de produção...
npm run build
npm run start
```

## Rotas

### /login
```js
//req
{
  username: String
}

//res
{
    username: 'nome de usuário',
    avatar: 'link com avatar do usuário',
    history: 'historico com ultimas 10 mensagens do banco',
    message: "success on login",
    status: 200,
}
```

### /message
```js
//req
{
  username: String,
  message: String
}

//res
{
  message: "success on send message", 
  status: 200
}
```


:link: [Acesse servidor hospedado na railway](https://servidor-oficinajd.herokuapp.com/)
