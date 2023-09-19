/// <reference types="cypress" />
const testData = require('cypress/fixtures/Data.json')
import { STAGE, productName, applicationUrl } from 'cypress/support/constants'
import { locators } from 'cypress/support/locators'

let productDataList: any = testData[STAGE].products
let billingDetails: any = testData[STAGE].billingDetails
let productData: any
if (productName != '') {
  productDataList.forEach((value: any) => {
    if (value.name == productName) {
      productData = [value]
      console.log(productData)
    }
  })
} else {
  productData = productDataList
}

productData.forEach((product: any) => {
  context('Product Purchase Flow From HomePage', () => {
    beforeEach(() => {
      cy.visit(applicationUrl)
      cy.log(STAGE)
    })

    it(`verify the product ${productName} purchase flow for different products folios and markers from home page`, () => {
      cy.get(locators.HomePage.hamburgerMenu)
        .click()
        .then(() => {
          cy.get(locators.HomePage.storeNavigationalLink)
            .click()
            .then(() => {
              cy.get(locators.StorePage.productList)
                .filter(':contains(' + productName + ')')
                .click()
                .then(() => {
                  cy.xpath(
                    locators.StorePage.productOverviewButton.replace(
                      'productName',
                      productName
                    )
                  )
                    .click()
                    .then(() => {
                      cy.get(locators.StorePage.productPrice)
                        .invoke('text')
                        .then(() => {
                          cy.get(locators.StorePage.buyButton)
                            .click()
                            .then(() => {
                              if (product.Marker.select) {
                                cy.get(locators.MarkerPage.markerPLus).click()
                              }
                              cy.get(locators.MarkerPage.nextButton)
                                .click()
                                .then(() => {
                                  if (product.Folio.select) {
                                    cy.log('Inside' + product.Folio.specs.model)
                                    cy.selectFolioModel(
                                      product.Folio.specs.model
                                    ).then(() => {
                                      cy.selectFolioVariant(
                                        product.Folio.specs.variant
                                      ).then(() => {
                                        cy.selectFolioMaterial(
                                          product.Folio.specs.material
                                        )
                                      })
                                    })
                                  } else {
                                    cy.get(locators.FolioPage.noThanks).click()
                                  }
                                  cy.wait(2000)
                                  cy.get(locators.FolioPage.addToCartButton)
                                    .click()
                                    .then(() => {
                                      cy.get(
                                        locators.CheckoutPage.checkOutButton
                                      )
                                        .click()
                                        .then(() => {
                                          cy.addBillingInformation(
                                            billingDetails.email,
                                            billingDetails.firstName,
                                            billingDetails.lastName,
                                            billingDetails.country,
                                            billingDetails.addressLine1,
                                            billingDetails.addressLine2,
                                            billingDetails.postalCode,
                                            billingDetails.city,
                                            billingDetails.phoneNumber
                                          ).then(() => {})
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
  })
})
