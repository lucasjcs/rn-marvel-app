
  
  

## Sobre

  

Olá! Nesta aplicação você terá acesso a um catalogo de personagens da Marvel, sendo possível exibir detalhes de cada um deles e também de favoritá-los.

  
  

![](marvel-app.gif)

  

## Principais tecnologias utilizadas

- [React Native](https://github.com/facebook/react-native) `0.63.2`

- [TypeScript](https://www.typescriptlang.org/) `3.8.3` para adicionar tipos ao javascript.

- [Redux](https://webpack.js.org/) `4.0.5` para gerenciamento do estado da aplicação.

- [Reduxsauce](https://github.com/jkeam/reduxsauce) `1.2.0"` para simplificar a lógica de actions, types e creators.

- [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) `7.1.4` para garantir um estado imutável.

- [styled-components](https://styled-components.com/) `5.1.1` para criação de componentes estilizados.

- [Jest](https://github.com/facebook/jest/)`26.4.0` para criação dos testes automatizados.

- [React Native Testing Library](https://github.com/callstack/react-native-testing-library) `7.0.2` Biblioteca utilizada para auxiliar na criação dos testes dos componentes.

## Metodologia de Desenvolvimento

  

A arquitetura do projeto foi pensada para ser simples, a fim de trazer maior legibilidade e simplicidade ao projeto. A idéia é extrair a maior parte da regra de negócio para os hooks, deixando a camada de apresentação responsável apenas pela renderização das informações, um exemplo desta arquitetura, de forma simplificada, pode ser vista na imagem abaixo:

  

![enter image description here](https://i.imgur.com/q4aYfWi.png)

  

Neste projeto decidi por não entrar tão a fundo na arquitetura, evitando incluir complexidade desnecessária em um projeto desse tipo, porém em projetos maiores é extremamente recomendado que a divisão da arquitetura seja seguida rigorosamente.

  

## Marvel API

  

É recomendável que você gere as chaves para acesso à API [clicando aqui](https://developer.marvel.com/). Após gerar suas chaves é só alterá-las no arquivo `env.js` que se encontra na raiz do projeto. Ex:

  

```js

PUBLIC_KEY: 'PUBLIC_KEY_VALUE',

PRIVATE_KEY: 'PRIVATE_KEY_VALUE',

```

Observação: o arquivo não foi adicionado no  `.gitignore` pra facilitar a execução do projeto, porém em um projeto real um arquivo desse tipo estaria ignorado.
  

## Como executar

  
  

##### 1 - Clone do repositório:

```

$ git clone https://github.com/lucasjcs/rn-marvel-app.git

```

##### 2 - Instale as dependências:

```

$ cd rn-marvel-app

$ npm install ou yarn

```

Se optar por executar no emulador do iPhone execute também:

`$ cd ios && pod install && cd ..`

##### 3 - Execute o projeto:

Com o [ambiente de desenvolvimento](https://github.com/lucasjcs/react-native-run-tutorial) configurado (emuladores, SDKs) execute:

```

$ yarn ios ou yarn android

```

Se preferir executar diretamente pelas IDE's, siga este [passo-a-passo](https://github.com/lucasjcs/rn-mobile-guideline).

  

#### Testes

Para executar os testes:

```

$ yarn test ou npm run test

```

  

Para gerar a cobertura de código:

```

$ yarn test:coverage ou npm run test:coverage

```

  
  

## Estrutura do Git

O padrão de commit adotado foi o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Para garantir o cumprimento da padronização foi utilizado a biblioteca `git-commit-msg-linter`.

  
  

##

Este projeto foi desenvolvido com :heart: por [@lucasjcs](https://github.com/lucasjcs) .