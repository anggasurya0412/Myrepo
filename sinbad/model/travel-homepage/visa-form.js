import { Selector, t } from 'testcafe';

class VisaForm {
  constructor() {
    this.firstName = Selector('[name="first_name"]')
    this.lastName = Selector('[name="last_name"]')
    this.email = Selector('[name="email"]')
    this.confirmEmail = Selector('[name="confirmemail"]')
    this.contactNumber = Selector('[name="phone"]')
    this.date = Selector('[name="date"]')
    this.submit = Selector('[type="submit"]')
    this.viewInvoice = Selector('[class="btn btn-success"]')

    this.invoiceFirstName = Selector("body > div.body-inner > div.main-wrapper.scrollspy-action > div.container > div.row.gap-10.equal-height > div > div > ul > li:nth-child(1)")
    this.invoiceLastName = Selector("body > div.body-inner > div.main-wrapper.scrollspy-action > div.container > div.row.gap-10.equal-height > div > div > ul > li:nth-child(2)")
    this.invoicePhoneNumber = Selector("body > div.body-inner > div.main-wrapper.scrollspy-action > div.container > div.row.gap-10.equal-height > div > div > ul > li:nth-child(3)")
    this.invoiceOrigin = Selector("body > div.body-inner > div.main-wrapper.scrollspy-action > div.container > div.row.gap-10.equal-height > div > div > ul > li:nth-child(4)")
    this.invoiceDestination = Selector("body > div.body-inner > div.main-wrapper.scrollspy-action > div.container > div.row.gap-10.equal-height > div > div > ul > li:nth-child(5)")
    this.invoiceVisaDate = Selector("body > div.body-inner > div.main-wrapper.scrollspy-action > div.container > div.row.gap-10.equal-height > div > div > ul > li:nth-child(7)")
  };
};

export default new VisaForm();