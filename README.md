1. install nodejs
2. create new workspace
3. initialize project and generate package.json: 
    - npm init
4. install cypress: 
    - npm install cypress --save-dev
5. open cypress by 1 among below ways:
    - npx cypress open
    - node_modules/.bin/cypress open
    *if cypress not open then update policy:
        - open powershell =>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
        =>Yes || Yes to All


*********************
CONVENTION
*********************

1. folder is named with lowercase and seperate by "-". Eg:<google>-<home>
2. spec test file is named in lowercase, seperate by "_", ended with .spec.js. Eg: toolsqa_demo_test.spec.js
3. Description in "describe", "it" with 1st uppercase, following by lowercase of every word

*********************
TEST RUN CLI
*********************

1. Run all test in intergration folder
    - ./node_modules/.bin/cypress run
2. Run specific test: 
    - ./node_modules/.bin/cypress run --spec <path to test file .spec.js>
    Eg: ./node_modules/.bin/cypress run --spec ./cypress/integration/toolsqa-tutorial/cypress_test_2.spec.js
3. Run specific folder test:
    - ./node_modules/.bin/cypress run --spec <path to folder test>/*.spec.js
    Eg: ./node_modules/.bin/cypress run --spec ./cypress/integration/toolsqa-tutorial/*.spec.js
4. Run in headed mode (not headless): add --headed at the end of command
    - ./node_modules/.bin/cypress run --headed
5. Run with specific browser: add --browser <browserName> ( browserName = {chrome, chromium, edge, electron, firefox} )
    - ./node_modules/.bin/cypress run --browser chrome
6. Run with npm command:
    - npm run <run_key_in_scripts_in_package.json> -- <options> (https://docs.cypress.io/guides/guides/command-line#cypress-run)
    Eg: package.json:
      "scripts": {
            "test": "cypress run"
        }
    run => npm run test -- --spec ./cypress/integration/toolsqa-tutorial/cypress_test_1.spec.js  --headed --browser chrome
7. Run and push result in Dashboad cypress:
    - add --record --key <key_value_of_project_in_dashboard> to the command
    Eg: npm run test -- --record --key 33732180-4a59-4de0-b22b-cd91be5c0fa2 --spec ./cypress/integration/toolsqa-tutorial/cypress_test_1.spec.js  --headed --browser chrome
    or: npx cypress run --record --key 33732180-4a59-4de0-b22b-cd91be5c0fa2 --spec ./cypress/integration/toolsqa-tutorial/cypress_test_1.spec.js  --headed --browser chrome

*********************
CUCUMBER & CYPRESS
*********************

1. Install CUCUMBER: npm install --save-dev cypress-cucumber-preprocessor
2. Configure:

    2.1: Add the below code to ./plugins/index.js file
	
    const cucumber = require('cypress-cucumber-preprocessor').default
	
    module.exports = (on, config) => {
	
    on('file:preprocessor', cucumber())
	
    }
	
    2.2: Specify feature in cypress.json file (this config will show only .feature in cypressUI)
	
    "testFiles": "**/*.{feature,features}"
	
    2.3: Add the below code at the end of package.json file
	
    "cypress-cucumber-preprocessor": {
	
    "nonGlobalStepDefinitions": true
	
    }
*********************
REFERENCE
*********************

https://www.toolsqa.com/cypress/what-is-cypress/

https://www.cypress.io/

https://docs.cypress.io/guides/overview/why-cypress

https://docs.cypress.io/guides/guides/command-line#cypress-run

https://github.com/TheBrainFamily/cypress-cucumber-preprocessor