describe('Descendant elements', () => {
    it('Select the descendant web elements', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#mz-product-tab-37217979-0').find('.swiper-slide').should('have.class', 'swiper-slide')
      .then((descendant)=>{
        cy.log(descendant);
        console.log(descendant)
      })
    })
})
