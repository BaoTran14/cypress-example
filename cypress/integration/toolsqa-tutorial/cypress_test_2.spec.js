// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("My First Cypress Test", ()=>{
    it("Visits ToolSQA Demo Page And Check The Menu Items", ()=>{
        //Visit the Demo QA Website
        cy.visit("https://demoqa.com/");
        // Clicking on Widget Menu Item
        cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
        //Verify number of items present under the Widget Tab
        cy.get('.demo-frame > ul > li').should('have.length',19);
        
        cy.get('.demo-frame > ul > li').find('[href*=keyboard]').should('have.length',2);    })
})