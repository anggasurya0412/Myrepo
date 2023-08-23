```INSTALLATION```

1. go to https://mochajs.org/

2. Set up a test script in package.json:

    "scripts": { 
        "test": "mocha --timeout 10000 --reporter mochawesome"
        }

3. install with npm:

 - npm install --save-dev mocha
 - npm install --save-dev chai
 - npm install --save-dev chai-http
 - npm i @faker-js/faker 
 - npm install mochawesome mochawesome-report-generator --save-dev

4. run test

 - npm run test {folder/filename}

```EXPLANATION```
1. i am using https://mockapi.io/ to create dummy API. This dummy API has a weakness, the system can not verify based on spesification like define order status, etc.
2. const { faker } = require('@faker-js/faker'); --> i use faker to make easier randomize some body request
3. 
``` 
const config = require('../config.json')
const baseUrl = config.baseUrl 
```

I separated base url to config.json and made it a global variable to make it easier to maintain the code if has changes base url

4. i put path url & request body out of description test because all test using same path url & request body, so you only change 1 line when have changes in there.

5. i use expect function to verify response API