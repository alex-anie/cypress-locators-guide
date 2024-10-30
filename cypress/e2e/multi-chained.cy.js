describe('Chained Multiple Elements', () => {
    it('Select Web Element with multiple chained commands', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('.swiper-slide').find('div').children('a').eq(1).click().should('have.attr', 'href')
    })
})
