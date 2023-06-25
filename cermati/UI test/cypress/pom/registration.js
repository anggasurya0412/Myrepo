export default class RegistrationJourney {

    static getEmailField() {
      return cy.get('[id="email"]');
    }

    static getPhoneNumberField() {
      return cy.get('[id="mobilePhone"]');
    }

    static getPasswordField() {
      return cy.get('[id="password"]');
    }

    static getConfirmPasswordField() {
      return cy.get('[id="confirmPassword"]');
    }

    static getFirstNameField() {
      return cy.get('[id="firstName"]');
    }

    static getLastNameField() {
      return cy.get('[id="lastName"]');
    }

    static getCityField() {
      return cy.get('[id="cityAndProvince"]');
    }

    static setCity(city){
      this.getCityField().type(city)
      cy.get('.autocomplete__list-item_fTFLC').should('contain', `${city}`).click()
    }

    static getContinueButton() {
      return cy.get('[data-button-name="register-new"]');
    }
  }
  