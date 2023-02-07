**DicioJS**

Um package para obter informações de uma palavra.
<br>A API usada é um fork de [ThiagoNelsi/dicioapi](https://github.com/ThiagoNelsi/dicio-api).
<br><br>
**🔧 Requisitos:**
<br>

- NodeJS v12+<br>
- Conexão á internet
  <br>

**💻 Instalação:**
<br>

> Usando NPM

```sh
npm install diciojs
```

> Usando YARN

```sh
yarn add diciojs
```

> Usando PNPM

```sh
pnpm add diciojs
```

<br><br>
**📖 Documentação:**
<br><br>

> **Ver informações de uma palavra**

```js
const Dicionario = require("diciojs");

// Informações da palavra suspeito
Dicionario.palavra("suspeito").then((res) => {
  console.log(res);
});
```

```json
[
  {
    "partOfSpeech": "adjetivo",
    "meanings": [
      "Que inspira suspeitas, desconfiança: testemunha suspeita.",
      "De que não se tem certeza; que suscita dúvidas; duvidoso: opinião suspeita.",
      "De cujas boas qualidades se duvida; que parece esconder defeitos ou vícios: amizade suspeita.",
      "Que se deve evitar; perigoso: homem suspeito.",
      "Que se supõe ser falso ou falsificado: marca suspeita.",
      "Diz-se de casa de tolerância; lupanar: casa suspeita."
    ],
    "etymology": ""
  },
  {
    "partOfSpeech": "substantivo masculino",
    "meanings": ["Pessoa suspeita."],
    "etymology": ""
  }
]
```

<br>

> **Ver os sinónimos de uma palavra**

```js
const Dicionario = require("diciojs");

// Sinonimos da palavra suspeito
Dicionario.sinonimos("suspeito").then((res) => {
  console.log(res);
});
```

```json
["equívoco", "malvisto", "perigoso", "suspeição", "duvidoso"]
```

<br>

> **Ver exemplos de frases com uma palavra**

```js
const Dicionario = require("diciojs");

// Frases com a palavra suspeito
Dicionario.frases("suspeito").then((res) => {
  console.log(res);
});
```

```json
[
  {
    "sentence": "Aquele que acreditar que o dinheiro fará tudo pode bem ser suspeito de fazer tudo por dinheiro.",
    "author": "- Benjamim Franklin"
  },
  {
    "sentence": "Um tão forte perfume de virtude é suspeito.",
    "author": "- Ivan Turgueniev"
  },
  {
    "sentence": "A cobra foi encontrada dentro de um pequeno aquário na lavanderia da casa de um homem de 30 anos suspeito de comprar produtos roubados.",
    "author": "Folha de S.Paulo, 26/06/2009"
  },
  {
    "sentence": "Nesta segunda, a polícia divulgou um novo retrato falado do suspeito de atirar contra o ex-árbitro.",
    "author": "Folha de S.Paulo, 21/02/2011"
  },
  {
    "sentence": "A polícia não soube informar se o suspeito já tem advogado, nem o que ele argumenta em sua defesa.",
    "author": "Folha de S.Paulo, 24/10/2009"
  }
]
```

> **Ver a separação silábica de uma palavra**

```js
const Dicionario = require("diciojs");

// Separação silábica da palavra suspeito
Dicionario.separacaoSilabica("suspeito").then((res) => {
  console.log(res);
});
```

```json
["sus", "pei", "to"]
```
