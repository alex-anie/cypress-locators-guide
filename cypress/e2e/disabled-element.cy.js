describe('Disable Elements', () => {
    it('Select disable element with force true', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('body').find('ul').children('li').eq(2).find('a').click({force: true}).should('have.attr', 'href')
    })
})
