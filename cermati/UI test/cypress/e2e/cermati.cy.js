import faker from 'faker';
import RegistrationJourney from "../pom/registration";
const url = 'https://www.cermati.com/app/gabung';
const password = "Test123!";

describe('register new account', () => {
  it('register new account with correct data', () => {
    cy.visit(url);
    RegistrationJourney.getEmailField().type(`${faker.random.alphaNumeric(10)}@gmail.com`);
    RegistrationJourney.getPhoneNumberField().type(`0823${faker.phone.phoneNumber('########')}`);
    RegistrationJourney.getPasswordField().type(password);
    RegistrationJourney.getConfirmPasswordField().type(password);
    RegistrationJourney.getFirstNameField().type(`${faker.name.firstName()}`);
    RegistrationJourney.getLastNameField().type(`${faker.name.lastName()}`);
    RegistrationJourney.setCity('KOTA JAKARTA PUSAT')
    RegistrationJourney.getContinueButton().click();
    cy.url().should('include', '/app/verification-method')
  })
})