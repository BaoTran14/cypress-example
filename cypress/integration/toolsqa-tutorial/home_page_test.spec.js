// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// const HomePage = require("../../support/page-objects/home_page")
import HomePage from "../../support/page-objects/home_page";
const homePage = new HomePage();

describe('Home Page Testing', function () {
    before('Setup Environment', ()=>{
        cy.fixture('example').then((data)=>{
            this.data = data;
        })
    })

    it("Login Test", ()=>{
        cy.visit('https://shop.demoqa.com/my-account/');
        homePage.getUsername().type(this.data.Username);
        homePage.getEmail().type(this.data.Email);
        homePage.getPassword().type(this.data.NewPassword);
        homePage.getRegisterButton().click();

        homePage.getLoginUserName().should('have.value',this.data.Username);

        this.data.ProductName.forEach(function(element){
            cy.selectProduct(element[0],element[1],element[2]);
        })
    })
    
})