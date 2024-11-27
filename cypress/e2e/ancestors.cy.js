describe('Ancestors Elements', () => {
    it('Select ancestor web element', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
      cy.get('#mz-product-tab-37217979-0 .swiper-slide').should('have.class', 'swiper-slide').parents()
      .then((ancestor) => {
        cy.log(ancestor); // This will log the ancestor element in the Cypress command log
        console.log(ancestor); // This will output the ancestor element in the browser's developer console
      });
    })
})

// describe('Ancestors Elements', () => {
//     it('Select ancestor web element', () => {
//       cy.visit('http://127.0.0.1:5500/parents.html');
//       cy.get('.colors-for-prints .magenta').should('have.class', 'magenta').parents()
//       .then((ancestor) => {
//         cy.log(ancestor); // This will log the ancestor element in the Cypress command log
//         console.log(ancestor); // This will output the ancestor element in the browser's developer console
//       });
//     })
// })
