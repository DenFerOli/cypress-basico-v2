### Documentação do projeto

<li>Uma breve documentação do projeto</li>
<li>Pré-requisitos (tais como Node.js, npm, git, etc.)</li>
<li>Passos para instalação das dependências</li>
<li>Passos para rodas os testes</li>
<li>Qualquer outra informação que for pertinente</li>

## Installation

Run:

```
npm install
```
or
```
npm i
```
(for the short version) to install the dev dependencies.

## Tests

You cab run the tests simulating a desktop or mobile viewport.

### Desktop

Run:

```
npm test
```
or
```
npm t
```
for the short version, to run the headless mode on a desktop viewport
or
```
npx cypress open
```
to open Cypress in interactive mode on a desktop viewport.

### Mobile

Run:
```
npm run test:mobile
```
to run the test in headless mode on a mobile viewport.
or
```
npm run cy:open
```
to open Cypress in interactive mode on a mobile viewport.
