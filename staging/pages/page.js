'use strict';

let I;

const _wait_time_short = 5
const _wait_time = 10
const _wait_time_long = 20
const _timeStamp = Date.now()

module.exports = {
	_init(){
		I = actor();
	},
	check404(){
		I.dontSeeInTitle('Page Not Found')
	},

	order(link, size=0){
		I.amOnPage('/products/'+link)
		I.seeInCurrentUrl('/products/'+link)
		this.check404()
		I.wait(_wait_time)
		I.selectOption('quantity','1')
		if(size != '0'){
			I.selectOption('option_option1',size)
		}
		I.seeElement("//input[@value='Add to cart']");
		I.click("//input[@value='Add to cart']");
		I.click("//span[@class='header-cart-info']");
		I.wait(_wait_time)
		I.seeInCurrentUrl('/cart')
		I.seeElement("//a[contains(@href,'" + link + "')]");
		this.check404()
	},
	orderAll(){
		this.order('nike-air-huarache-', '39')
		this.order('nike-air-huarache-', '40')
	},
	checkAllPage(){
		I.amOnPage('/')
		I.seeInCurrentUrl('/')
		this.check404()
		I.amOnPage('/products/category/nike')
		I.seeInCurrentUrl('/products/category/nike')
		this.check404()
		I.amOnPage('/products/category/asics-onitsuka')
		I.seeInCurrentUrl('/products/category/asics-onitsuka')
		this.check404()
		I.amOnPage('/products/category/sale')
		I.seeInCurrentUrl('/products/category/sale')
		this.check404()
		I.amOnPage('/blog')
		I.seeInCurrentUrl('/blog')
		this.check404()
	},
}