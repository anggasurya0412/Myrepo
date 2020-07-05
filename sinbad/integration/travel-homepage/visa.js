import 'module-alias/register';
import { ClientFunction, Selector } from "testcafe";
import TravelForm from "model/travel-homepage/travel-form";
import VisaForm from "model/travel-homepage/visa-form";
import helper from 'lib/helper';

const router = require('lib/router');
const user = require('resources/json/travel-user');
const url = router.getUrlTravel();

let origin = 'Indonesia';
let destination = "Australia";
let firstName = helper.randName();
let lastName = helper.randName();
let contactNumber = helper.randNumber();

fixture `Visa`
  .page `${url}/login`

test(`submit visa should be success`, async t => {
  await t
    .typeText(TravelForm.email, user.email)
    .typeText(TravelForm.password, user.password)
    .click(TravelForm.logInButton)
    .navigateTo(url)
    .click(TravelForm.visa)
    .click(TravelForm.origin)
    .typeText(TravelForm.origin, origin).pressKey('enter')
    .click(TravelForm.destination)
    .typeText(TravelForm.destination, destination).pressKey('enter')
  await TravelForm.inputVisaDate(3);
  await t
    .click(TravelForm.visaDate).pressKey('esc')
    .click(TravelForm.submitVisa)
    .typeText(VisaForm.firstName, firstName)
    .typeText(VisaForm.lastName, lastName)
    .typeText(VisaForm.email, user.email)
    .typeText(VisaForm.confirmEmail, user.email)
    .typeText(VisaForm.contactNumber, contactNumber)
  await t
    .click(VisaForm.submit)
    .click(VisaForm.viewInvoice)
    .expect(VisaForm.invoiceFirstName.textContent).contains(firstName)
    .expect(VisaForm.invoiceLastName.textContent).contains(lastName)
    .expect(VisaForm.invoicePhoneNumber.textContent).contains(contactNumber)
    .expect(VisaForm.invoiceOrigin.textContent).contains(origin)
    .expect(VisaForm.invoiceDestination.textContent).contains(destination)

});