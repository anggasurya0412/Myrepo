import { Selector, t } from 'testcafe';

class TravelForm {
  constructor() {
    this.hotel = Selector('[data-name="hotels"]')
    this.hotelDestination = Selector('[class="select2-choice"]')
    this.searchHotel = Selector('[id="select2-drop"]')
    this.dateCheckIn = Selector('[id="checkin"]')
    this.dateCheckOut = Selector('[id="checkout"]')
    this.addChild = Selector("//div[contains(@class,'col 01')]//button[contains(@class,'btn btn-white bootstrap-touchspin-up')][contains(text(),'+')]")
    this.submit = Selector('[type="submit"]')
    this.filterHigh = Selector("//label[contains(text(),'High to Low')]")

    this.visa = Selector('[data-name="visa"]')
    this.email = Selector('[name="username"]')
    this.password = Selector('[name="password"]')
    this.logInButton = Selector('[class="btn btn-primary btn-lg btn-block loginbtn"]')
    this.origin = Selector("#visa > div > div > form > div > div > div:nth-child(1)", { force: true })
    this.destination = Selector('#visa > div > div > form > div > div > div:nth-child(2)', { force: true })
    this.visaDate = Selector('[name="date"]')
    this.submitVisa = Selector('#visa > div > div > form > div > div > div:nth-child(4)')
  };
  async checkIn(nDay = 0) {
    let currentDate = new Date()
    let month = currentDate.getMonth() + 1
    let day = currentDate.getDate()
    let year = currentDate.getFullYear()
    if (nDay < 0) {
      day = currentDate.getDate() - nDay
    } else {
      day = currentDate.getDate() + nDay
    };
    await t
      .typeText(this.dateCheckIn, day.toString() + '-' + month.toString() + '-' + year.toString())
  };
  async checkOut(nDay = 0) {
    let currentDate = new Date()
    let month = currentDate.getMonth() + 1
    let day = currentDate.getDate()
    let year = currentDate.getFullYear()
    if (nDay < 0) {
      day = currentDate.getDate() - nDay
    } else {
      day = currentDate.getDate() + nDay
    };
    await t
      .typeText(this.dateCheckOut, day.toString() + '-' + month.toString() + '-' + year.toString())
  };
  async inputVisaDate(nMonth = 0) {
    let currentDate = new Date()
    let month = currentDate.getMonth() + 1
    let day = 1
    let year = currentDate.getFullYear()
    if (nMonth < 0) {
      month = currentDate.getMonth() - nMonth
    } else {
      month = currentDate.getMonth() + nMonth
    };
    await t
      .typeText(this.visaDate, day.toString() + '-' + month.toString() + '-' + year.toString())
  };
};

export default new TravelForm();