import 'module-alias/register';
import { ClientFunction } from "testcafe";
import CheckOutForm from "model/pillow-homepage/checkout";
import helper from 'lib/helper';

const router = require('lib/router');
const bankData = require('resources/json/credit-card');
const getLocation = ClientFunction(() => document.location.href);
const url = router.getUrlPillow();

fixture `Buy Pillow`
  .page `${url}`

test(`checkout flow for purchasing “Pillow” using valid Credit Card as payment method should be a Success`, async t => {
  await t
    .click(CheckOutForm.buttonBuy)
    .click(CheckOutForm.name).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.name, helper.randFullName())
    .click(CheckOutForm.email).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.email, helper.randEmail())
    .click(CheckOutForm.phone).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.phone, helper.randNumber())
    .click(CheckOutForm.adress).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.adress, helper.randAlphanumeric())
    .click(CheckOutForm.checkOut)
    .switchToIframe(CheckOutForm.switchFramePayment)
    .click(CheckOutForm.continue)
    .click(CheckOutForm.creditCard)
    .typeText(CheckOutForm.cardNumber, bankData.vaildCreditCard.cardNumber)
  await CheckOutForm.expireDate();
  await t
    .typeText(CheckOutForm.cvv, bankData.vaildCreditCard.cvv)
    .click(CheckOutForm.pay)
    .switchToIframe(CheckOutForm.switchFrameOTP)
    .typeText(CheckOutForm.otp, bankData.vaildCreditCard.otp)
    .click(CheckOutForm.submit)
    .switchToMainWindow()
    .switchToIframe(CheckOutForm.switchFramePayment)
    .expect(CheckOutForm.alertSuccess.textContent).contains('')
});
test(`checkout flow for purchasing “Pillow” using invalid Credit Card as payment method should be a Failed`, async t => {
  await t
    .click(CheckOutForm.buttonBuy)
    .click(CheckOutForm.name).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.name, helper.randFullName())
    .click(CheckOutForm.email).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.email, helper.randEmail())
    .click(CheckOutForm.phone).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.phone, helper.randNumber())
    .click(CheckOutForm.adress).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.adress, helper.randAlphanumeric())
    .click(CheckOutForm.checkOut)
    .switchToIframe(CheckOutForm.switchFramePayment)
    .click(CheckOutForm.continue)
    .click(CheckOutForm.creditCard)
    .typeText(CheckOutForm.cardNumber, bankData.invaildCreditCard.cardNumber)
  await CheckOutForm.expireDate();
  await t
    .typeText(CheckOutForm.cvv, bankData.invaildCreditCard.cvv)
    .click(CheckOutForm.pay)
    .switchToIframe(CheckOutForm.switchFrameOTP)
    .typeText(CheckOutForm.otp, bankData.invaildCreditCard.otp)
    .click(CheckOutForm.submit)
    .switchToMainWindow()
    .switchToIframe(CheckOutForm.switchFramePayment)
    .expect(CheckOutForm.alertFailed.textContent).contains('')
});
test(`checkout flow for purchasing “Pillow” should be a Failed when cancel OTP`, async t => {
  await t
    .click(CheckOutForm.buttonBuy)
    .click(CheckOutForm.name).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.name, helper.randFullName())
    .click(CheckOutForm.email).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.email, helper.randEmail())
    .click(CheckOutForm.phone).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.phone, helper.randNumber())
    .click(CheckOutForm.adress).pressKey('ctrl+a delete')
    .typeText(CheckOutForm.adress, helper.randAlphanumeric())
    .click(CheckOutForm.checkOut)
    .switchToIframe(CheckOutForm.switchFramePayment)
    .click(CheckOutForm.continue)
    .click(CheckOutForm.creditCard)
    .typeText(CheckOutForm.cardNumber, bankData.vaildCreditCard.cardNumber)
  await CheckOutForm.expireDate();
  await t
    .typeText(CheckOutForm.cvv, bankData.vaildCreditCard.cvv)
    .click(CheckOutForm.pay)
    .switchToIframe(CheckOutForm.switchFrameOTP)
    .typeText(CheckOutForm.otp, bankData.vaildCreditCard.otp)
    .click(CheckOutForm.cancel)
    .switchToMainWindow()
    .switchToIframe(CheckOutForm.switchFramePayment)
    .expect(CheckOutForm.alertFailed.textContent).contains('')
});