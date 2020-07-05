import { Selector, t } from 'testcafe';

class CheckOutForm {
  constructor() {
    this.buttonBuy = Selector('[data-reactid=".0.0.0.2.0.0.5"]');
    this.inputAmount = Selector('[data-reactid=".0.0.1.0.1.0.1.0:$1.2.0"]');
    this.name = Selector('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]');
    this.email = Selector('[data-reactid=".0.0.1.0.3.0.0.1.1.0"]');
    this.phone = Selector('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]');
    this.city = Selector('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]');
    this.adress = Selector('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]');
    this.postalCode = Selector('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]')
    this.checkOut = Selector('[data-reactid=".0.0.1.1.0"]');
    this.switchFramePayment = Selector('[id="snap-midtrans"]', { force: true })
    this.switchFrameOTP = Selector('#application > div.container-fluid > div > div > div > iframe', { force: true })
    this.continue = Selector('[href="#/select-payment"]', { force: true })
    this.creditCard = Selector('[href="#/credit-card"]', { force: true })
    this.cardNumber = Selector('[name="cardnumber"]')
    this.expiredCC = Selector('[class="input-group col-xs-7"]')
    this.cvv = Selector('[class="input-group col-xs-5"]')
    this.pay = Selector('[class="text-button-main"]')
    this.otp = Selector('[name="PaRes"]')
    this.submit = Selector('[name="ok"]')
    this.cancel = Selector('[name="cancel"]')
    this.alertSuccess = Selector('[class="final-panel success"]')
    this.alertFailed = Selector('[class="final-panel failed"]')
  };
  async expireDate(nYear = 0) {
    let currentDate = new Date()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()
    if (nYear < 0) {
      year = currentDate.getFullYear() - nYear
    } else {
      year = currentDate.getFullYear() + nYear
    };
    await t
      .typeText(this.expiredCC, month.toString() + '/' + year.toString())
  };
};

export default new CheckOutForm();