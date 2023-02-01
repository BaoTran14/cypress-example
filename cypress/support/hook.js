// // type definitions for Cypress object "cy"
// // <reference types="cypress" />
// // const fs = require('fs');
// const {Before, After} = require("cypress-cucumber-preprocessor/steps");
// // const Environment = require("../support/environemnt")
// // const environemnt = new Environment();
// var testData;
// // var testData;

// // class Hook{
// //     constructor(){
// //         this.testData;
// //     }

// //     setup() {
        
// //     }
// // }
// // describe("",function() {
//     Before(()=> {
//         // environemnt.set_up();
//         // test_data = environemnt.data;

//         // let test_env = Cypress.env("testEnv");
//         // let test_browser = Cypress.env("testEnv");
//         // cy.log(test_env);
//         // console.log("****************************");
//         // console.log("Running tests in environment " + test_env);
//         // console.log("Running tests with browser " + test_browser);
//         // console.log("****************************");
//         // console.log("START...");
//         // console.log("****************************");
        
//         // //read test data according to test environment
//         // let data;
//         // let jsonPath;
//         // switch (test_env) {
//         //     case "sit":
//         //         jsonPath = fs.readFileSync("./cypress/fixtures/example.json");
//         //         break;
//         //     case "uat":
//         //         jsonPath = fs.readFileSync("cypress/fixtures/example_1.json");
//         //         break;
//         //     default:
//         //         jsonPath = fs.readFileSync("./cypress/fixtures/example.json");
//         //         break;
//         // }
//         // try {
//         //     data = JSON.parse(jsonPath);
//         //   } catch(err) {
//         //     console.log(err);
//         //     return;
//         //   }
//         // console.log(data.Url)
//         // testData = data;




//         testData = cy.fixture('example.json').then(function($data)
//         {
//             testData=$data;
//             cy.log(testData.Url);
//             // cy.get('').upload
//             // return this.testData;
//         }).then(()=>{
//             cy.wait(1000);
//         });
//         console.log(testData);
//         cy.log("Call Hook");
//         cy.log(testData).then(()=>{
//             // module.exports = {testData};
//             cy.wait(1000).then(()=>{
//                 cy.log("Test");
//                 // module.exports = {testData};
//             })
//         });
//         testData;
//         console.log(testData);
//     })
//     // console.log(testData);
//     // it("", function () {
//     //     cy.log(testData.Url);
//     // })
// // })


// // function loadDataFrom(filePath) {
// //     cy.fixture(filePath).then((data)=>{
// //         this.testData = data;
// //     })
// //     // cy.log(testData);

// // }
// export default testData;
// // export default Hook;