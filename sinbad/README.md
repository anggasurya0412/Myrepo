
# newcore-frontend-testcafe

Frontend testing using [TestCafe](https://devexpress.github.io/testcafe).

**Please read this README carefully before you start developing test.**

## Table of Contents

- [Table of Contents](#markdown-header-table-of-contents)
- [Getting Started](#markdown-header-getting-started)
    - [Prerequisites](#markdown-header-prerequisites)
    - [Installing](#markdown-header-installing)
    - [Usage](#markdown-header-usage)
- [TestCafe: Fixture and Test](#markdown-header-testcafe-fixture-and-test)
- [Recommended to Use Visual Studio Code](#markdown-header-recommended-to-use-visual-studio-code)

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

These are the steps to install newcore-frontend-testcafe

```bash
$ git clone git@bitbucket.org:investree/newcore-frontend-testcafe.git
$ cd newcore-frontend-testcafe
$ npm install
```

To use our version of testcafe-allure-reporter

```bash
$ sh scripts/replaceAllureReporter.sh
```

### Usage

```bash
$ npm run test:chrome -- /path/to/test/folder
$ npm run test:firefox -- /path/to/test/folder 
```

Headless mode

```bash
$ npm run test:chrome:headless -- /path/to/test/folder
```

If you want to use allure reporter

```bash
$ npm run test:chrome -- -S -r allure /path/to/test/folder
```

Then, generate and serve allure report

```bash
$ npm run allure:gen && npm run allure:open
```

Open http://localhost:8080/ on your browser

Nb : 
```bash
$ Repeat test actions in the browser and check the console for errors.
  If you see this error, it means that the tested website caused it. You can fix it or disable tracking JavaScript errors in TestCafe. To do the latter, enable the "--skip-js-errors" option.

e.g :
$ npm run test:firefox -- /path/to/test/folder --skip-js-errors
```

#### Folder: lib
This folder is reserved for router, helper, database functions, and API call functions.

#### Folder: model
This folder is reserved for page object model files. Page object model will be explained on [this section](#markdown-header-testcafe-page-object-model).

#### Folder: resources
This folder is reserved for json, documents, and images which are static files.

#### Folder: scripts
This folder is reserved for pipeline-related scripts and scripts that are not used on TestCafe runtime.

### Importing Module

In order to avoid relative path, this project uses `module-alias`. To use `module-alias`, put `import 'module-alias/register'` at the top of your script.

## TestCafe: Fixture and Test
If you ever tried [Cypress](https://www.cypress.io/) before, a fixture is a static resource. While in TestCafe, a fixture is a categorization of test cases.

As written in [TestCafe documentation](https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#fixtures):
> TestCafe tests must be organized into categories called fixtures. A JavaScript, TypeScript or CoffeeScript file with TestCafe tests can contain one or more fixtures.

To write a test file, you must define a fixture and write test(s) below it.

```js
import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
});
```

## Recommended to Use Visual Studio Code

### VS Code Intellisense

Since we use `module-alias`, text editor will not recognize what's inside the file that you imported. As a result, you won't get any autocompletion hint. We solved this problem by using `jsconfig.json` that we provided in this project.

### Plugin: TestLatte

TestLatte is used for listing test cases in your project. You can run a particular test case, unlike using terminal where you have to run the whole test suite.

To use TestLatte in this project, include `"testlatte.filePath": "integration/"` in `settings.json`.

![](https://raw.githubusercontent.com/Selminha/testlatte/master/images/browser-list.png)

### Plugin: TestCafe Test Runner

Just like TestLatte, this plugin is used for running a particular test case just by right clicking test case and click `TestCafe: Run test(s) in browser`
![](https://github.com/romanresh/vscode-testcafe/raw/master/images/demo.gif)