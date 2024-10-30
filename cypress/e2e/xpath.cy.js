describe('Xpath Selection', () => {
    it('Select the blog with Xpath and scroll to view the selected element', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.xpath('/html/body/div[1]/div[5]/div[1]/div[7]/div/div[6]/div/div/div/div/div/div[1]/div[1]/div/div[1]/a').scrollIntoView();
    })
  })