# Web Forge Labs React Boilerplate

## Requirements

For development, you will only need Node.js installed on your environement.

## Recommended VSCode Standards

Try to use the react workspace that is in project's root, this will maintain our coding standards.

Auto format: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Linting: [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

### Node

[Node](http://nodejs.org/) is really easy to install & include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.10.11

    $ npm --version
    1.3.21

#### Node installation

You will need to use a Terminal.
Install node using NVM : https://github.com/creationix/nvm

## Install

    $ git clone https://github.com/striderag/protector-user-client.git
    $ cd webforgelabs-react-boilerplate
    $ yarn install

## Start & watch

    $ yarn start
    $ Go to localhost:3000

## Production

You can choose between environments. The default is `qa`

    $ yarn build:env

## Test

    $ yarn test

## Storybook

    $ yarn storybook

#### Make sure to run `yarn test`, `build:env`, `yarn lint` before commiting.

## Languages & tools

### JavaScript base dependencies

- [React](https://reactjs.org/) Main JS Library.
- [Typescript](https://www.typescriptlang.org/) Superset of javascript that compiles to plain javascript
- [TSLint](https://palantir.github.io/tslint/) An extensible linter for the TypeScript language.
- [RxJS](https://www.learnrxjs.io/) Reactive extensions library for javascript
- [antd](https://ant.design/) UI Components.
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) Routing
- [Redux](https://redux.js.org/)
- [Redux Observable](https://redux-observable.js.org/)
- [React i18 Next](https://react.i18next.com/)
- [Axios](https://github.com/axios/axios)
- [Axios Observable](https://github.com/zhaosiyang/axios-observable)
- [Storybook](https://storybook.js.org/) Storybook is an open source tool for developing UI components in isolation

### CSS

- [LESS](http://lesscss.org/) CSS extension language used by antd
