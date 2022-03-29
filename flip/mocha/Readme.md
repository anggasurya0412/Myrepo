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

Then, install mocha
```
npm install --global mocha
```

Then, set up a test script in package.json:
```
"scripts": {
    "test": "node ./node_modules/.bin/mocha"
  }
```

Then, install plugin for reporting,
```
npm i mochawesome
npm install --save-dev mochawesome
npm install mochawesome mochawesome-report-generator --save-dev
```

### Usage
run test without reporter
```
npm run test {pathfolder/filename}
```

run test with reporter
```
npx mocha {pathfolder/filename} --reporter mochawesome 
```

## Referrence
- https://mochajs.org
- https://www.lambdatest.com/blog/how-to-generate-mocha-reports-with-mochawesome/