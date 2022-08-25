# Aplicativo Web

Aplicativo de mensagem compartilhada criado com NextJS, utilizando as bibliotecas socket.io, axios e tailwindcss, que permite comunicação em tempo real.

## Tecnologias

##### Linguagem/Interpretador

* [Node.js v16.17.0](https://nodejs.org/pt-br/)
* [ReactJS v18.0.0](https://pt-br.reactjs.org/)
* [NextJS v12.2.4](https://nextjs.org/)

##### Bibliotecas/Módulos
As seguintes tecnologias foram utilizadas para desenvolver aplicativo:
#
| Biblioteca | Versão | Usabilidade |
| ------ | -------- | ------------ |
| [Axios](https://axios-http.com/docs/api_intro) | 0.27.2 | Utilizado para fazer requisições da API disponibilizada pelo back-end |
| [Socket.io Client](https://socket.io/) | 4.5.1 | Biblioteca utilizada para realizar comunicação com servidor back-end, utilizando socket, para receber atualizações das mensagens. |
| [Phosphor Icons React](https://www.npmjs.com/package/phosphor-react) | 1.4.1 | Usado para criar icones dentro da aplicação |

## Variáveis de Ambiente
A instação possui algumas variáveis de ambiente que deve ser instanciadas.
```ini
NEXT_PUBLIC_API_URL='link do servidor back-end'
```

## Instalação
Após preparar o ambiente, realize clone do repositorio, instale as dependências para iniciar aplicação web
```sh
git clone https://github.com/eryc23/oficinajd.git
cd oficinajd/web
npm install

//execute para ambiente de desenvolvimento
npm run dev

//execute para ambiente de produção
npm run build
```


:link: [Acesse o aplicativo hospedado na vercel](https://oficinajd.vercel.app/)
