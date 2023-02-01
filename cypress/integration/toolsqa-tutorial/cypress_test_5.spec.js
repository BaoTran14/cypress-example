// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Explicit Assertions', () => {
    
  it('expect - Validation using explicit assertion on a specified subject', () => {
    
    //Chai's BDD style assertions for using expect
    expect(true).to.be.true
    const obj = { tools: 'qa' }
    expect(obj).to.equal(obj)
    expect(obj).to.deep.equal({ tools: 'qa' })
  })
 
  it('expect - matches text of two elements', () => {
    cy.visit("https://demoqa.com/browser-windows");
    
    const normalizeText = (inputString) => inputString.replace(/\s/g, '').toLowerCase()
 
    let firstText
    let secondText
 
    cy.get('#windowButton')
      .then(($first) => {
        firstText = normalizeText($first.text())
      })
 
      cy.get('#messageWindowButton')
      .then(($second) => {
         secondText = normalizeText($second.text())
 
         expect(secondText, 'second text').contains(firstText)
      })
      
      
      
  })
 
  it('assert - given value is an object', () => {
    const employee = {
      name: 'Lakshay',
      age: 34,
    }
 
    assert.isObject(employee, 'value is object')
  })
})