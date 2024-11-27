Cypress.Commands.add('inspectButton', ()=>{
    return cy.get('#entry_217964 > .d-flex > .btn');
})

  Cypress.Commands.add('getByXPath', (xpath) => {
    return cy.document().then((doc) => {
      const result = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return cy.wrap(result.singleNodeValue);
    });
  });
