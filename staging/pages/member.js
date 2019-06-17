'use strict';

let I,Page,Var;

const _wait_time_short = 5
const _wait_time = 10
const _wait_time_long = 20
const _timeStamp = Date.now()

module.exports = {
	 _init() {
    I = actor();
    Var = require('../pages/variable.js');
  },
  login(){
  	I.amOnPage('/')
    I.click("//a[@id='gdn-login-registrasi']")
    I.waitForElement("//button[@class='button-submit']",_wait_time)
  	I.fillField("//input[@placeholder='Masukkan email']",Var.username())
  	I.fillField("//input[@placeholder='Masukkan password']",Var.password())
  	I.click("//button[@class='button-submit']")
    I.waitForElement("//label[@id='gdn-already-login-label']",_wait_time)
  },
  logout(){
    I.moveCursorTo("//label[@id='gdn-already-login-label']")
  	I.click("//a[@id='gdn-usermenu-logout']")
  	I.waitForElement("//a[@id='gdn-login-registrasi']", _wait_time)
},
  addItemToCart(){
    I.amOnPage('/c/3/iphone/IP-1000001/54593?page=1&start=0&category=IP-1000001&sort=')
    I.click('/html[1]/body[1]/div[2]/div[1]/section[1]/div[7]/div[1]/div[1]/div[2]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[1]/div[1]/div[1]')
    I.waitForElement("//div[@class='buy-now__button']",_wait_time)
    I.click("//div[@class='buy-now__button']")
    I.waitInUrl('/cart',_wait_time)
    I.waitForElement("//button[@class='blu-btn b-primary']",_wait_time_long)
  },
  checkOut(){
    I.click("//button[@class='blu-btn b-primary']")
    I.waitForElement("//button[@class='blu-btn b-jc-center next-btn b-primary']",_wait_time)
    I.click("//button[@class='blu-btn b-jc-center next-btn b-primary']")
    I.waitForElement("//input[@id='gdn-submit-checkout']",_wait_time_long)
    I.click("//input[@id='gdn-payment-category-Transfer']")
    I.selectOption("//option[contains(text(),'Bank BNI')]")
    I.wait(_wait_time)
    I.click("//input[@id='gdn-submit-checkout']",_wait_time_long)
    I.waitForElement("//a[@class='button-blue orderdetail']",_wait_time_long)
  },