import 'cypress-wait-until';
import { shop } from '../support/PageObject/Definitions';
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('01LUMA', () => {
  beforeEach(() => {
    cy.visit('/')                                     //1. Open site https://magento.softwaretestingboard.com/
  })
  it('Technical Test: Add items and check Total', () => {
shop.addToCart('Gwyn Endurance Tee', 'M', 'Green', 4) //2. Add to cart 4 - Gwyn Endurance Tee Medium Green
shop.address('United Kingdom')                        //3. Address should United Kingdom
shop.cartTotal(92)                                    //4. Check cart total is $92.00 (discount applied)
shop.updateCart('Gwyn Endurance Tee', 3)              //5. Update the Quantity of  Gwyn Endurance Tee Medium Green to 3
shop.addToCart('Gwyn Endurance Tee', 'S', 'Yellow', 1)//6. Add to cart 1 - Gwyn Endurance Tee Small Yellow
shop.addToCart('Quest Lumaflex™ Band')                //7. Add to cart 1 Quest Lumaflex™ Band
shop.cartTotal(116)                                   //8. Check cart total is $140.00
})
})
