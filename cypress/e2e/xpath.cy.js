describe('Xpath Selection', () => {
    it('Select the blog with XPath and scroll to view the selected element, then click the element to open', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/');
        
        // Use the custom jQuery XPath helper to locate the element
        cy.getByXPath(".//div[1]//div[5]//div[1]//div[7]//div//div[6]//div//div//div//div//div//div[1]//div[1]//div//div[1]//a")
          .scrollIntoView().click();
    });
});