describe('Single Web Element', () => {
    it('Select a single web element', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#entry_217966')
    })
  })
