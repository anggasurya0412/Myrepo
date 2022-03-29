/// <reference types="cypress" />
const baseUrl = "https://demo.vercel.store/";

describe('Checkout product', () => {
    const productName = ["Black Beanie", "Lightweight Jacket"];
    const total = 1;
    const cardNumber = '4111 1111 1111 1111';
    const cvv = 123;
    beforeEach(() => {
        cy.visit(baseUrl)
      })
    it('checkout product as a guest with fill all required field should success', () => {
      cy.get('#mobile-search').type(`${productName[0]}{enter}`);
      cy.get(`[aria-label="${productName[0]}"]`).should('be.visible').click();
      cy.get('[aria-label="Add to Cart"]').click();
      cy.get('[class="CartItem_productName__RYrlX"]').should('have.text', productName);
      cy.get('[href="/checkout"]').click();
      cy.url().should('include','/checkout');

      cy.get('[data-test="cart-item-product-title"]').should('contain',`${productName[0]}`);
      cy.get('[id="email"]').type(`${cy.faker.internet.email()}`);
      cy.get('[id="checkout-customer-continue"]').click();
      cy.get('[id="firstNameInput"]').should('be.visible').type(`${cy.faker.name.firstName()}`);
      cy.get('[id="lastNameInput"]').type(`${cy.faker.name.lastName()}`);
      cy.get('[id="addressLine1Input"]').type(`${cy.faker.address.streetAddress()}`);
      cy.get('[id="cityInput"]').type(`${cy.faker.address.cityName()}`);
      cy.get('[id="countryCodeInput"]').select('Argentina');
      cy.get('[data-test="provinceCodeInput-select"]').should('be.visible').select('Catamarca');
      cy.get('[id="postCodeInput"]').type(`${cy.faker.address.zipCode()}`);
      cy.get('[class="shippingOptionLabel"]').should('be.visible');
      cy.get('[id="checkout-shipping-continue"]').click();
      cy.get('[data-test="payment-method-name"]').should('be.visible');
      cy.get('[id="ccNumber"]').type(cardNumber);
      cy.get('[id="ccExpiry"]').type('0522');
      cy.get('[id="ccName"]').type(`${cy.faker.name.middleName()}`);
      cy.get('[id="ccCvv"]').type(cvv);
      cy.get('[id="checkout-payment-continue"]').click();
      cy.url().should('include', '/checkout/order-confirmation');
    })
    
    it('checkout product after create account should success', () => {
        cy.get('[class="UserNav_avatarButton__9exMf"]').click();
        cy.get('.pt-1 > .text-accent-9').click();
        cy.get('[placeholder="First Name"]').type(`${cy.faker.name.firstName()}`);
        cy.get('[placeholder="Last Name"]').type(`${cy.faker.name.lastName()}`);
        cy.get('[placeholder="Email"]').type(`${cy.faker.internet.email()}`);
        cy.get('[placeholder="Password"]').type(`${cy.faker.random.alphaNumeric(10)}`);
        cy.get('.pt-2 > .Button_root__G_l9X').click()

        cy.get('#mobile-search').type(`${productName[1]}{enter}`);
        cy.get(`[aria-label="${productName[1]}"]`).should('be.visible').click();
        cy.get('[aria-label="Add to Cart"]').click();
        cy.get('[class="CartItem_productName__RYrlX"]').should('have.text', productName[1]);
        cy.get('.h-9 > :nth-child(4)').click()
        cy.get('[class="Quantity_input__yBzs3"]').should('have.value', '2');
        cy.get('[aria-label="Close"]').click();

        cy.get('#mobile-search').clear().type(`joggers{enter}`);
        cy.get('[aria-label="Joggers"]').click();
        cy.get('[aria-label="Add to Cart"]').click();
        cy.get('[class="CartItem_productName__RYrlX"]').should('have.text', 'Joggers');

        cy.get('[href="/checkout"]').click();
        cy.url().should('include','/checkout');
        cy.get('[data-test="cart-item-product-title"]').should('contain',`${productName}`);
        cy.get('[id="email"]').type(`${cy.faker.internet.email()}`);
        cy.get('[id="checkout-customer-continue"]').click();
        cy.get('[id="firstNameInput"]').should('be.visible').type(`${cy.faker.name.firstName()}`);
        cy.get('[id="lastNameInput"]').type(`${cy.faker.name.lastName()}`);
        cy.get('[id="addressLine1Input"]').type(`${cy.faker.address.streetAddress()}`);
        cy.get('[id="cityInput"]').type(`${cy.faker.address.cityName()}`);
        cy.get('[id="countryCodeInput"]').select('Argentina');
        cy.get('[data-test="provinceCodeInput-select"]').should('be.visible').select('Catamarca');
        cy.get('[id="postCodeInput"]').type(`${cy.faker.address.zipCode()}`);
        cy.get('[class="shippingOptionLabel"]').should('be.visible');
        cy.get('[id="checkout-shipping-continue"]').click();
        cy.get('[data-test="payment-method-name"]').should('be.visible');
        cy.get('[id="ccNumber"]').type(cardNumber);
        cy.get('[id="ccExpiry"]').type('0522');
        cy.get('[id="ccName"]').type(`${cy.faker.name.middleName()}`);
        cy.get('[id="ccCvv"]').type(cvv);
        cy.get('[id="checkout-payment-continue"]').click();
        cy.url().should('include', '/checkout/order-confirmation');
      })

    it('sort all product by “Price: High to Low” should success', () => {
        cy.visit(baseUrl+'/search/shop-all');
        cy.get('.order-2').click();
        cy.get(':nth-child(5) > .block').click();
        cy.location().should((loc) => {
          expect(loc.search).to.eq('?sort=price-desc')
        });

        let firstPrice = []
        let secondPrice =[] 
        cy.get('[aria-label="Lightweight Jacket"] > .ProductCard_header__qlwPO > .ProductCard_price___JB_V').should('be.visible').each(($span,index) =>{
          firstPrice.push($span.text())
          const priceOne = firstPrice[index].match(/\d+/)
          firstPrice = parseInt(priceOne)
        })
        cy.get('[aria-label="T-Shirt"] > .ProductCard_header__qlwPO > .ProductCard_price___JB_V').each(($span,index)=>{
          secondPrice.push($span.text())
          const priceTwo = secondPrice[index].match(/\d+/)
          secondPrice = parseInt(priceTwo)
          expect(firstPrice, 'Compare price').to.be.greaterThan(secondPrice)
        })
      })
  })