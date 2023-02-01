// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const ProductPage = require("./page-objects/product_page");
const productPage = new ProductPage();

Cypress.Commands.add('selectProduct', (productName, size, color) =>{
    // Doing the search part for Shirts.
    productPage.getSearchClick().click()
    productPage.getSearchTextBox().type('Shirt');
    productPage.getSearchTextBox().type('{enter}')

    // Searching for product mentioned in fixtures file
    cy.get('.noo-product-inner h3').each(($el , index , $list) => {
        if($el.text().includes(productName)) {
            cy.get($el).click();
        }
    })

    // Selecting the size and color and then adding to cart button.
    productPage.getSelectColor().select(color);
    productPage.getSelectSize().select(size);
    productPage.getAddtoCartButton().click();
})
