class Login {

    getAccountButton() {
        return cy.get('[data-testid="cypress-headernav-profile"]');
    }

    getEmailButton() {
        return cy.get('[data-testid="social-auth-button-email"]')
    }

    getEmailField(){
        return cy.get('[data-testid="email-login-email"]')
    }

    getContinueButton() {
        return cy.get('.t1dqvypu')
    }

    getPasswordField() {
        return cy.get('[data-testid="email-signup-password"]')
    }


    NewLogin = (email, password) => {
        this.getAccountButton().click()
        this.getEmailButton().click()
        this.getEmailField().type(email)
        this.getContinueButton().click()
        this.getPasswordField().type(password)
    }
}



export default new Login