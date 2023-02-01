const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
// const testData = require("../../support/hook")

Given('user visit url',()=>{
    cy.visit("https://www.google.com");
    cy
})