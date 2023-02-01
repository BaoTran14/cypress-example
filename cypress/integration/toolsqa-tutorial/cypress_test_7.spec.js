// type definitions for Cypress object "cy"
/// <reference types="cypress" />

var debug = require("debug");

describe('JQuery and Cypress Test Case', function () {
    it('Performing JQuery Operation', function () {
      cy.visit("https://www.toolsqa.com/cypress/jquery-and-cypress/")
        .then(() => {
          const $titleHomePage = Cypress.$('.entry-title').text();
          cy.log('Title of Page is: ' + $titleHomePage);
        })
      })

      it('Performing JQuery Operation', function () {
        cy.visit("https://www.toolsqa.com/cypress/jquery-and-cypress/");
        const $titleHomePage = Cypress.$('.entry-title').text();
        console.log($titleHomePage);
        })
  })