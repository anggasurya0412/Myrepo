/// <reference types="cypress" />
const baseUrl = "https://www.99.co/singapore";
import HomePage from '../pom/homepage';

const Home = new HomePage()

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
        cy.url().should('include', '/');
      })
    it('check that all of the following H2 titles exist on the Home page and that the titles contain the correct text', () => {
      Home.title1().contains('Featured Projects');
      Home.title2().contains('Popular Projects');
      Home.title3().contains('Find your property value instantly');
      Home.title4().contains('Listings with videos');
      Home.title5().contains('View these via video call');
      Home.title6().contains('Popular listings');
      Home.title7().contains('Featured stories');
      Home.title8().contains('Listings found only on 99');
      Home.title9().contains('Latest New Launches');
      Home.title10().contains('Explore 99.co');
    })

    it('check that all of the links under the following title works as expected', () => {
      for (let i = 1; i < 5; i++) {
        Home.popularProject(i).click().should('have.attr', 'href').then((href) =>{
          cy.url().should('include', href)
        });
        cy.go('back');
      }
    })

    it('check that all of the links under the following title works as expected', () => {
      const index = Math.floor(Math.random() * 4) + 1;
      Home.tabRent().click();
      Home.allProperty().click();
      Home.option(index).click();
      Home.allBed().click();
      Home.option(index).click();
      Home.entireUnit().click();
      Home.option(index).click();
    })
  })