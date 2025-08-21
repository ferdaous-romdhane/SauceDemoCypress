import homePage from "../pages/homePage"
import inventoryPage from "../pages/inventoryPage"




describe('Sauce automation with cypress', () => {

  beforeEach(() => {
// Visit the Sauce Demo login page before each test
    cy.visit('https://www.saucedemo.com/')
    
  })
  it('Login with valid credentials', () => {
    // Valid login
    homePage.typeUsername('standard_user')
    homePage.typePassword('secret_sauce')
    homePage.clickLoginButton()
    inventoryPage.elements.title().should('have.text', 'Products')


  })

  it('Login with invalid credentials', () => {
    homePage.typeUsername('locked_out_user')
    homePage.typePassword('secret_sauce')
    homePage.clickLoginButton()
    homePage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.')

  })


  it('Login with invalid credentials', () => {
    homePage.typeUsername('locked_out_user')
    homePage.typePassword('secret_sauce')
    homePage.clickLoginButton()
    homePage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.')


  })
})