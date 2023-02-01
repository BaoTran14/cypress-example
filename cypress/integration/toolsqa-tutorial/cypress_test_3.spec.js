// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page And Check The Menu Items', function() {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");
    
   // Clicking on Widget Menu Item
    cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
   
    //Verify number of items present under the Widget Tab
    cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);
   
    //Verify the number of span items under the Widgets Tab
    cy.get(':nth-child(4) > .element-list > .menu-list > li').find('span').should('have.length',9);
    
    //Print a string to console to show Async nature 
    cy.log("Using cypress log").then(()=>{
        console.log("async");
    });
    
  })
  })