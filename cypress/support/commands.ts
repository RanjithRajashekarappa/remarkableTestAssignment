// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import { locators } from 'cypress/support/locators'
Cypress.Commands.add('convertStringToNumber', (stringPrice: string) => {
  const numericString = stringPrice.replace(/\D/g, '')

  // Parse the numeric string to an integer
  const result = parseInt(numericString, 10)

  return result
})

Cypress.Commands.add('selectFolioModel', (folioModel: string) => {
  if (folioModel == 'TypeFolio') {
    cy.get(locators.FolioPage.modelTypeFolio).click()
  } else if (folioModel == 'Folios') {
    cy.get(locators.FolioPage.modelFolio).click()
  }
})

Cypress.Commands.add('selectFolioVariant', (folioVariant: string) => {
  if (folioVariant == 'Folio') {
    cy.get(locators.FolioPage.variantFolio).click()
  } else if (folioVariant == 'BookFolio') {
    cy.get(locators.FolioPage.variantBookFolio).click()
  }
})

Cypress.Commands.add(
  'formatUrlForProductPage',
  (applicationUrl: string, productName: string) => {
    const product = productName.replace(/\s+/g, '-').replace(/M/g, 'm')
    const formattedUrl = applicationUrl + '/store/' + product + '/type-folio'
    return cy.wrap(formattedUrl)
  }
)

Cypress.Commands.add('selectFolioMaterial', (folioMaterial: string) => {
  if (folioMaterial == 'Black') {
    cy.get(locators.FolioPage.materialBlack).click()
  } else if (folioMaterial == 'Brown') {
    cy.get(locators.FolioPage.materialBrown).click()
  } else if (folioMaterial == 'Gray') {
    cy.get(locators.FolioPage.materialGray).click()
  } else if (folioMaterial == 'InkBlack') {
    cy.get(locators.FolioPage.InkBlack).click()
  } else if (folioMaterial == 'SepiaBrown') {
    cy.get(locators.FolioPage.sepiaBrown).click()
  }
})

Cypress.Commands.add(
  'addCardInformation',
  (number: string, expiry: string, cvc: string) => {
    cy.get(locators.CheckoutPage.payment.card)
      .click()
      .then(() => {
        cy.get(locators.CheckoutPage.payment.cardNumber).type(number)
        cy.get(locators.CheckoutPage.payment.expiryYear).type(expiry)
        cy.get(locators.CheckoutPage.payment.cvc).type(cvc)
      })
  }
)

Cypress.Commands.add(
  'addBillingInformation',
  (
    email: string,
    firstName: string,
    lastName: string,
    country: string,
    addressLine1: string,
    addressLine2: string,
    postalCode: string,
    City: string,
    PhoneNumber: string
  ) => {
    cy.get(locators.CheckoutPage.contactInformation.email)
      .type(email)
      .then(() => {
        cy.get('[data-cy="customer-form"]')
          .find('button[type="submit"]')
          .click()
          .then(() => {
            cy.wait(2000)
            cy.get(locators.CheckoutPage.billingAddress.firstName)
              .type(firstName)
              .then(() => {
                cy.get(locators.CheckoutPage.billingAddress.lastName)
                  .type(lastName)
                  .then(() => {
                    cy.get(locators.CheckoutPage.billingAddress.addressLine1)
                      .type(addressLine1)
                      .then(() => {
                        cy.get(locators.CheckoutPage.billingAddress.city)
                          .type(City)
                          .then(() => {
                            cy.get(
                              locators.CheckoutPage.billingAddress.addressLine2
                            )
                              .type(addressLine2)
                              .then(() => {
                                cy.get(
                                  locators.CheckoutPage.billingAddress
                                    .postalCode
                                )
                                  .type(postalCode)
                                  .then(() => {
                                    cy.get(
                                      locators.CheckoutPage.billingAddress
                                        .country
                                    )
                                      .select(country)
                                      .then(() => {
                                        cy.get(
                                          locators.CheckoutPage.billingAddress
                                            .phoneNumber
                                        )
                                          .type(PhoneNumber)
                                          .then(() => {
                                            cy.get(
                                              locators.CheckoutPage
                                                .billingAddress.continue
                                            ).click()
                                          })
                                      })
                                  })
                              })
                          })
                      })
                  })
              })
          })
      })
  }
)
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
