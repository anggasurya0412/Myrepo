# qa-backend-mocha

API testing using [Mocha](https://mochajs.org).

## Table of Contents

- [Table of Contents](#markdown-header-table-of-contents)
- [Getting Started](#markdown-header-getting-started)
    - [Prerequisites](#markdown-header-prerequisites)
    - [Installing](#markdown-header-installing)
    - [Usage](#markdown-header-usage)
- [Referrence](#markdown-header-referrence)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites

Install git and npm. For Debian/Ubuntu distribution:

```
$ sudo apt install npm git
```

For Windows, download installer using links below:

- [npm](https://nodejs.org/en/)
- [git](https://git-scm.com/downloads)

### Installing

First, update npm to version 6.X.X

```bash
$ sudo npm install -g npm@^6.14.0
```

Then, install cypress
```
npm install cypress --save-dev
npm init
```

Then, set up a test script in package.json:
```
"scripts": {
    "cypress:open": "cypress open"
  }
```

Then, install plugin for reporting,
```
npm i --save-dev cypress-mochawesome-reporter
```

### Usage
First, before start scripting, run "npx cypress open" to get all example code

run test with reporter
```
npx cypress run --reporter mochawesome --spec "{path folder}/{file name}"
```

## Referrence
- https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install
- https://www.npmjs.com/package/cypress-mochawesome-reporter