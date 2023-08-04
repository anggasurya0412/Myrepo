export default class testObject {

    static getTypeField() {
      return cy.get('[class="new-todo"]');
    }

    static getCheckboxField(index) {
      return cy.get('[class="toggle"]').eq(index);
    }

    static getDeleteButton(index) {
      return cy.get('[class="destroy"]').eq(index);
    }

    static getListCount() {
      return cy.get('[data-bind="text: remainingCount"]');
    }
    
    static getAll() {
      return cy.get('[class="filters"]').contains('All');
    }

    static getActive() {
      return cy.get('[class="filters"]').contains('Active');
    }

    static getCompleted() {
      return cy.get('[class="filters"]').contains('Completed');
    }
  }
  