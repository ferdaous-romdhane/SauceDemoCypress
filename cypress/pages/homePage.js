class sauceDemoHomePage {

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLoginButton() {
        this.elements.loginButton().click();
    }

    verifyErrorMessage(expectedMessage) {
        this.elements.errorMessage().should('have.text', expectedMessage);
    }
}

module.exports = new sauceDemoHomePage();