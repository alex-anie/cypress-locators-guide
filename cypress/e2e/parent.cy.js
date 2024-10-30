describe('Parent element', () => {
    it('Return the parent web element of the specific element', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#mz-product-tab-37217979-0 .swiper-slide')
      .should('have.class', 'swiper-slide')
      .parent()
    })
})
