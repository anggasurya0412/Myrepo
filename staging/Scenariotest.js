Feature('Order');

Scenario('Order product', (I,Member)=>{
	Member.login()
	Member.addItemToCart()
	Member.checkOut()
	Member.logout()
})