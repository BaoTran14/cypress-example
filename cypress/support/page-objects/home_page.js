class HomePage {
    getUsername(){
        return cy.get('#reg_username')
    }

    getEmail(){
        return cy.get('#reg_email')
    }

    getPassword(){
        return cy.get('#reg_password');
    }

    getLoginUserName(){
        return cy.get('#username');
    }

    getRegisterButton() {
        return cy.get('.woocommerce-Button');
    }
}
// module.exports = HomePage
export default HomePage