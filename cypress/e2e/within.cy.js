describe('Parent Scope Element', () => {
    it('Select a tag and click within the parent scope', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/');

        cy.get('.product-thumb-top').first().should('be.visible')

        .within(() => {
            cy.get('a').click()
        });

    });
});
