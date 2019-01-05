'use strict';

let I;
let linkwebsite = 'https://github.com';

const _wait_time_short = 5
const _wait_time = 10
const _wait_time_long = 20
const _timeStamp = Date.now()

module.exports = {

  _init() {
    I = actor();
  },
  check404(){ //check for 404 page not found
    I.dontSeeInTitle('Page Not Found')
  },

register(){
  I.amOnPage(linkwebsite)
  this.check404()
  I.click("//a[@class='HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1']") //--> Relative  XPath
  I.seeInCurrentUrl(linkwebsite + '/join')
  this.check404()
  I.fillField('user[login]',"Angga Surya Utama")
  I.fillField('user[email]',"anggasuryautama041295@gmail.com")
  I.fillField('user[password]',"QA - Test Shopee")
  I.click("//button[@id='signup_button']")
  I.wait(_wait_time)  
}

login(){
  I.amOnPage(linkwebsite)
  this.check404()
  I.click("//a[@class='HeaderMenu-link no-underline mr-3']']")
  I.seeInCurrentUrl(linkwebsite = '/login')
  this.check404()
  I.fillField('login',"<username>")
  I.fillField('password',"<password>")
  I.click("//input[@value='Sign in']")
  I.wait(_wait_time)
}

logout(){
  I.amOnPage(linkwebsite)
  this.check404()
  I.click("//span[@class='dropdown-caret']")
  I.click("//button[@type='submit']")
}

opengist(){
  I.amOnPage(linkwebsite)
  this.check404()
  I.click("//span[@class='dropdown-caret']")
  I.click("//a[contains(text(),'Your gists')]")
  I.seeInCurrentUrl("https://gist.github.com/")
  this.check404()
  I.wait(_wait_time_short)
}

createpublicgist(){
  I.switchTo("//div[contains(@class,'CodeMirror-lines')]")
  I.fillField("//div[contains(@class,'CodeMirror-lines')]","Test public gist")
  I.click("//button[contains(@value,'1')]")
  I.wait(_wait_time)
  this.check404()
  I.amOnPage("https://gist.github.com/<username>")
}

withextension(){
  I.fillField('gist[description]',"QA E2E Test")
  I.fillField('gist[contents][][name]',"testshopee")
  this.createpublicgist()
  I.seeElement("//div[@id='file-testshopee']")
}

withoutextension(){
  I.fillField('gist[description]',"QA E2E Test")
  this.createpublicgist()
  I.seeElement("/html[1]/body[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]") //absolute Xpath
}

mygist(){
  I.amOnPage("https://gist.github.com/<username>")
  this.check404()
  I.click("//div[@id='file-testshopee']")
  I.click("//ul[@class='pagehead-actions']//a[@class='btn btn-sm']")
  }

editextention(){
  this.mygist()
  I.clearField('gist[contents][][name]')
  I.fillField('gist[contents][][name]',"test")
  I.click("//button[contains(@value,'1')]")
  I.wait(_wait_time)
  I.amOnPage("https://gist.github.com/<username>")
  I.seeElement("//div[@id='file-test']")
}

editdescription(){
  this.mygist()
  I.clearField('gist[description]')
  I.fillField('gist[description]',"test Shopee")
  I.click("//button[contains(@value,'1')]")
  I.wait(_wait_time)
}

edittext(){
  this.mygist()
  I.click("//ul[@class='pagehead-actions']//a[@class='btn btn-sm']")
  I.switchTo("//div[contains(@class,'CodeMirror-lines')]")
  I.clearField("//div[contains(@class,'CodeMirror-lines')]")
  I.fillField('Testing')
  I.click("//button[contains(@value,'1')]")
  I.wait(_wait_time)
}

deletegist(){
  I.amOnPage("https://gist.github.com/<username>")
  this.check404()
  I.click("//div[@id='file-test']")
  I.click("//form[@action='/anggasurya0412/ded913de87eeb9a7220635766187fbc9']//button[@type='submit']")
  I.acceptPopup()
  I.dontSeeElement("//div[@id='file-test']")
}
}