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
    }
  })
} else {
  productData = productDataList
}

productData.forEach((product: any) => {
  context('Product Purchase Flow From Product Page', () => {
    beforeEach(() => {
      cy.formatUrlForProductPage(applicationUrl, productName).then(
        (formattedUrl) => {
          cy.visit(formattedUrl)
          cy.log(STAGE)
        }
      )
    })

    it(`verify the product ${productName} purchase flow for different products from product page`, () => {
      cy.selectFolioMaterial(product.purchaseProductPage.Folio.material).then(
        () => {
          cy.get(locators.FolioPage.KeyboardLanguage)
            .select(product.purchaseProductPage.Folio.keyboard)
            .then(() => {
              cy.get(locators.FolioPage.addToCartButton)
                .click()
                .then(() => {
                  cy.get(locators.CheckoutPage.checkOutButton)
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
        }
      )
    })
  })
})
