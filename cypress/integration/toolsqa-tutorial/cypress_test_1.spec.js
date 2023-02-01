// type definitions for Cypress object "cy"
/// <reference types="cypress" />

var debug = require("debug");

describe("My First Cypress Test", ()=>{
    it("Visits ToolSQA Demo Page And Check The Menu Items", ()=>{
        //Visit the Demo QA Website
        // cy.visit("https://demoqa.com/");
        // debug("demosqa accessed")
        // // Clicking on Widget Menu Item
        // cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
        // //Verify number of items present under the Widget Tab
        // cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);

        cy.visit("https://jsonplaceholder.cypress.io/");
        cy.request('comments').as('comments')

        cy.get('@comments').should((response) => {
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
        cy.screenshot();
    })
})