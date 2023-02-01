// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// const HomePage = require("../../support/page-objects/home_page")
import HomePage from "../../support/page-objects/home_page";
const homePage = new HomePage();

describe('Working With File', function () {

    it("Login Test", ()=>{
        cy.writeFile("example.json", {"company":"ifi_solution"}, {flag : "a"})
    
    })
})