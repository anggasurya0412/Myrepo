Feature('Feature');

Scenario('submit without click button populate', (I,Page) => {
  Page.goToWeb()
  Page.form('angga')
  Page.submit()

Scenario('submit with click button populate', (I,Page) => {
  Page.goToWeb()
  Page.form()
  Page.populate()
  Page.submit()