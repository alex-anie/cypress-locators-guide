describe('Working with CSS Class Selectors', () => {
    it('Select multiple web elements', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#mz-product-tab-37217979-0 .swiper-slide').should('have.class', 'swiper-slide')
    })
})
