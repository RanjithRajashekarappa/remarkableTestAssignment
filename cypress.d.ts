// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare namespace Cypress {
  interface Chainable {
    convertStringToNumber(stringPrice: string): number
    formatUrlForProductPage(
      applicationUrl: string,
      productName: string
    ): Chainable<string>
    selectFolioModel(folioModel: string): Chainable<Element>
    selectFolioVariant(folioVariant: string): Chainable<Element>
    selectFolioMaterial(folioMaterial: string): Chainable<Element>
    addBillingInformation(
      email: string,
      firstName: string,
      lastName: string,
      country: string,
      addressLine1: string,
      addressLine2: string,
      postalCode: string,
      City: string,
      PhoneNumber: string
    ): Chainable<Element>
    addCardInformation(
      number: string,
      expiry: string,
      cvc: string
    ): Chainable<Element>
  }
}
