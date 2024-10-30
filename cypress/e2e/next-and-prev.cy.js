describe('Next and Previous Web Elements', () => {
    beforeEach(()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/');
    })

    it('Select the previous Web Element', () => {
        cy.get('#mz-product-listing-image-39217984-0-2 > div > div:nth-child(2)').prev()
        .then((ele)=>{
            cy.log(ele)
            console.log(ele)
        })
    })

    it('Select the next Web Element', () => {
        cy.get('#mz-product-listing-image-39217984-0-2 > div > div:nth-child(2)').next()
        .then((ele)=>{
            cy.log(ele)
            console.log(ele)
        })
    })
})

