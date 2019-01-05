Feature('create Gist');

Scenario ('Register & logout', (I,Page) => {
	Page.register()
	Page.logout()
})

Scenario ('create gist without extention', (I,Page) => {
	Page.login()
	Page.opengist()
	Page.withextension()
})

Scenario ('create gist without extention', (I,Page) => {
	Page.login()
	Page.opengist()
	Page.withoutextension()
})

Scenario ('edit gist', (I,Page) => {
	Page.login()
	Page.opengist()
	Page.editextention()
	Page.editdescription()
	Page.edittext()
})

Scenario ('delete gist', (I,Page) => {
	Page.login()
	Page.opengist()
	Page.deletegist()
})

Scenario ('list gist', (I,Page) => {
	Page.login()
	Page.opengist()
	I.amOnPage('https://gist.github.com/<username>')
	I.saveScreenshot('mylistgist.png');
})