describe('Children Elements', () => {
    it('Select children web element', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#mz-product-tab-37217979-0').children()
      .then((children)=>{
        cy.log(children)
        console.log(children)
      })
    })
})
