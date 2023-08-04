import faker from 'faker';
import testObject from "../pom/index.js";
const url = 'https://todomvc.com/examples/knockoutjs';

describe('to do', () => {
  let totalCount
  beforeEach(function (){
    // visit url
    cy.visit(url);
  });
  
  it('add new todo', () => {
    // menambahkan 4 to do 
    for(let i=0; i<4; i++){
      testObject.getTypeField().type(`${faker.name.lastName()}{enter}`)
  }
  })

  it('check to do', () => {
    // menambahkan 4 to do 
    for(let i=0; i<4; i++){
      testObject.getTypeField().type(`${faker.name.lastName()}{enter}`)
      //menyelesaikan semua to do
      testObject.getCheckboxField(i).click()
  }
  })

  it('filter to do', () => {
    // menambahkan 4 to do 
    for(let i=0; i<4; i++){
      testObject.getTypeField().type(`${faker.name.lastName()}{enter}`)
  }
  //menyelesaikan to do pertama
  testObject.getCheckboxField(0).click()

  // filter to do item
  testObject.getCompleted().click()
  cy.url().should('include', '/#/completed')
  })

  it('delete to do', () => {
    // menambahkan 4 to do 
    for(let i=0; i<4; i++){
      testObject.getTypeField().type(`${faker.name.lastName()}{enter}`)
  }
  testObject.getListCount().invoke('text').as('counts')
  cy.get('@counts').then((counts) =>{
  totalCount = counts
  })
  // delete to do item
  testObject.getDeleteButton(0).click({force:true})
  testObject.getListCount().invoke('text').as('new_counts')

  cy.get('@new_counts').then((new_counts) =>{
    expect(new_counts).to.eq(`${totalCount-1}`)
  })
})

})