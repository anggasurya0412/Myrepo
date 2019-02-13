'use strict';

let I;

const _wait_time_short = 3
const _wait_time = 10
const _wait_time_long = 20
const _timeStamp = Date.now()

module.exports = {
  _init() {
    I = actor()
},
check404() { //check for 404 page not found
  I.dontSeeInTitle('Page Not Found')
 },

 goToWeb(){
 	I.amOnPage("https://devexpress.github.io/testcafe/example")
 	this.check404()
 },

 form(name=''){
 	if(name!=''){
 		I.fillField('developer-name', name)
 	}
 	I.checkOption("//input[@id='remote-testing']")
 	I.seeCheckboxIsChecked('remote')
 	I.checkOption('re-using')
 	I.checkOption('background')
 	I.checkOption('CI')
 	I.checkOption('analysis')
 	I.checkOption("//input[@id='tried-test-cafe']")
 	I.click("//input[@value='Linux']")
 },
 populate(){
 	I.click("//input[@value='Populate']")
 	I.acceptPopup()
 	this.check404()
 },
 submit(){
 	I.click("//button[@id='submit-button']")
 	I.wait(_wait_time_short)
 	this.check404()
 	I.seeInCurrentUrl('https://devexpress.github.io/testcafe/example/thank-you.html')
 }