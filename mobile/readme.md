# Aplicativo Mobile

Aplicativo de mensagem compartilhada criado com react native, utilizando as bibliotecas socket.io e axios, que permite comunicação em tempo real.

## Tecnologias

##### Linguagem/Interpretador

* [Node.js v16.17.0](https://nodejs.org/pt-br/)
* [ReactJS v18.0.0](https://pt-br.reactjs.org/)
* [React Native v0.69.3](https://reactnative.dev/)

##### Bibliotecas/Módulos
As seguintes tecnologias foram utilizadas para desenvolver aplicativo:
#
| Biblioteca | Versão | Usabilidade |
| ------ | -------- | ------------ |
| [Axios](https://axios-http.com/docs/api_intro) | 0.27.2 | Utilizado para fazer requisições da API disponibilizada pelo back-end |
| [Socket.io](https://socket.io/) | 4.5.1 | Biblioteca utilizada para realizar comunicação com servidor back-end, utilizando socket, para receber atualizações das mensagens. |
| [Phosphor Icons react-native](https://www.npmjs.com/package/phosphor-react-native) | 1.1.2 | Usado para criar icones dentro da aplicação |
| [React Native SVG](https://github.com/react-native-svg/react-native-svg) | 12.4.3 | Usado como dependencia para phosphor-icons |


## Instalação

Necessário instalar [Java JDK](https://openjdk.org/projects/jdk/11/)
```sh
//Execute comando caso tenha instalado chocolatey
choco install -y nodejs-lts openjdk11
```
> Então deverá criar variável de ambiente chamada ``JAVA_HOME`` no seu computador, apontando para pasta que foi instalado javaJDK.

#
Necessário baixa e instalar [Android Studio](https://developer.android.com/studio?hl=pt&gclid=EAIaIQobChMInu2j4sji-QIVWBXUAR0v5gXwEAAYASAAEgKAuPD_BwE&gclsrc=aw.ds), Você deve marcar as opções durante instalação...
* Android SDK
* Android SDK Platform
* Android Virtual Device

Após instalação deve ser feito instalação do Android SDK, deverá escolher no mínimo android 12 se baseando baixo:
- Android SDK Platform 31
- Intel x86 Atom_64 System Image ou Google APIs Intel x86 Atom System Image
> Após a instalação deverá criar váriavels de ambiente chamada ``ANDROID_HOME`` apontando para ``%LOCALAPPDATA%\Android\Sdk`` e após criar dentro da variável de ambiente ``PATH``  deverá adicionar ``%LOCALAPPDATA%\Android\Sdk\platform-tools``
##### _*É necessário ativar Intel HAXM em computadores com processador intel, você pode ver mais instrução acessando [este repositório](https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows)._

#
Após preparar o ambiente, realize clone do repositorio, instale as dependências para iniciar aplicação
```sh
git clone https://github.com/eryc23/oficinajd.git
cd oficinajd/mobile
npm install

//execute para ambiente de desenvolvimento
npm run android

//execute para o aplicativo(.APK)...
npm run build
```
> Após gerar o aplicativo o mesmo fica no diretório ``.../android\app\build\outputs\apk\release\app-release.apk``
