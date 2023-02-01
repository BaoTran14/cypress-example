// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      cy.visit('https://demoqa.com/webtables')
      
      cy.get('.rt-table')
        .find('.rt-tbody')
        .find('.rt-tr')
        .should('have.class', '-odd')
        .find('.rt-td')
        .first()
        
        // checking the text of the <td> element in various ways
        .should('have.text', 'Cierra')
        .and('contain', 'Cierra')
        .and('have.html', 'Cierra')
        .and('match', 'div')
        
        // Checking whether the text matches the regular expression
        // Here, first we have invoked the jQuery method text()
        // and then validated it using the regular expression
        .invoke('text')
        .should('match', /Cierra/i)
    })
   
    it('.and() - chain multiple assertions together', () => {
      
      cy.get('.rt-thead')
        .should('have.class', '-header')
        .and('have.attr', 'style')
    })
  })