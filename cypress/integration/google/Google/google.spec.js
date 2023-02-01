const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps")
import testData from '../../../support/hook'

Given('user visit google',()=>{
    cy.fixture('example_1.json').as('data')
    cy.get('@data').then((data)=>{
        cy.visit(data.Url)
    })
})

Given('user visit google',(url)=>{
    cy.fixture('example_1.json').then((data) =>{
        this.data = data;
    })
})