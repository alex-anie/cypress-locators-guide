describe('Custom Selector', () => {
    it('create a custom selector and chain it to the cy.visit command', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/').inspectButton();
    })
})
