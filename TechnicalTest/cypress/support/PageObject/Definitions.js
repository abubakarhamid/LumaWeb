export class lumaShop{
    
    addToCart(productName, size, color, quantity=1){
        cy.get('#search').type(`${productName}{enter}`)
        cy.get('.product-item').contains(productName).click()
        if (size && color) {
          cy.get('[option-label="' + size + '"]').click()
          cy.get('[option-label="' + color + '"]').click()
        }
        cy.get('#qty').clear().type(quantity)
        cy.contains('Add to Cart').click()
        cy.waitUntil(() => 
        cy.get('[data-block="minicart"]').should('be.visible'))
        cy.get('[data-block="minicart"]').click()
        cy.contains('View and Edit Cart').click({force:true})
    }
    updateCart(productName, quantity){
        cy.get('[title="' + productName + '"]').should('be.visible')
        cy.get('[data-role="cart-item-qty"]').clear().type(quantity)
        cy.get('[title="Update Shopping Cart"]').click()
        cy.waitUntil(() => 
        cy.get('[data-block="minicart"]').find('[class="counter qty"]')
        .contains(quantity).should('be.visible'))
    }
    cartTotal(GrandTotal){
        cy.waitUntil(()=> 
        cy.get('[class="grand totals"]').find('.price')
        .contains(GrandTotal).should('contain', GrandTotal)) 
    }
    address(country){
        cy.contains('Estimate Shipping and Tax').click()
        cy.get('select[data-bind*="optionsText: \'label\'"][name="country_id"]')
        .should('exist').select(country)
    }
    }
    export const shop = new lumaShop() 
    