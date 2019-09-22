/// <reference types="Cypress" />

describe('Test Chat Bot', () => {

  it('Element Interaction', () => {
      cy.openChat()
      cy.get('[id="vcw-card-button"][vouchtitle="Room Types"]',{timeout: 10000}).click()
      cy.get('[vouchtitle="Main Menu"]',{timeout: 10000}).click()
      cy.get('[vouchtitle="Subscribe Newsletter"]',{timeout: 10000}).click()
      cy.get('[vouchtitle="Cancel"]',{timeout: 10000}).click()
  })
  it('Interaction with message',() => {
    cy.openChat()
    cy.get('[id="vc-input"]',{timeout: 10000}).type('Reservations',{timeout: 10000})
      .get('[id="btn-send"]').click({force:true})
    cy.get('[vouchtitle="Room Reservations"]',{timeout: 10000})
      .get('[id="vc-input"]').type('Room Reservations')
      .get('[id="btn-send"]').click({force:true})
    cy.get('[vouchtitle="Back"]',{timeout: 10000})
      .get('[id="vc-input"]').type('Room requests',{timeout: 10000})
      .get('[id="btn-send"]').click({force:true})
    cy.get('[vouchtitle="Make Room Booking"]',{timeout: 10000})
      .get('[id="vc-input"]').type('Make Room Booking',{timeout: 10000})
      .get('[id="btn-send"]').click({force:true})
  })
  it('interaction with message & element ', () => {
    cy.openChat()
    cy.get('[id="vcw-card-button"][vouchtitle="Room Types"]',{timeout: 10000}).click()
    cy.get('[vouchtitle="Main Menu"]',{timeout: 10000})
      .get('[id="vc-input"]').type('Main Menu',{timeout: 10000})
      .get('[id="btn-send"]').click({force:true})
    cy.get('[vouchtitle="Subscribe Newsletter"]',{timeout: 10000})
      .get('[id="vc-input"]').type('Subscribe Newsletter',{timeout: 10000})
      .get('[id="btn-send"]').click({force:true})
    cy.get('[vouchtitle="Cancel"]',{timeout: 10000}).click()
  })
})