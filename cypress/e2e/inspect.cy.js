describe('Inspect Web Elements', () => {
    it('Inspect web elements with Cypress test runner', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#entry_217964 > .d-flex > .btn');
    })
})
