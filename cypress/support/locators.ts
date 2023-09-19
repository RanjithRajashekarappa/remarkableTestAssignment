export const locators: any = {
  HomePage: {
    hamburgerMenu: '[data-cy="menu-hamburger-button"]',
    storeNavigationalLink: '[data-cy="menu-store-button"] > p'
  },
  StorePage: {
    productList: '[data-cy="store-overview-ark-navbar"] > ul > li',
    productOverviewButton: '//*[@data-cy="store-overview-productName-button"]',
    productPrice: '[data-cy="product-price"] > .text-28',
    buyButton: '[data-cy="configure-bundle"]'
  },
  MarkerPage: {
    marker: '[data-cy-sku="RM210"]',
    markerPLus: '[data-cy-sku="RM212"]',
    noSelection: '[data-cy="unselect-item"]',
    nextButton: '[data-cy="next"]'
  },
  FolioPage: {
    modelFolio: '[data-cy="model-folio"]',
    modelTypeFolio: '[data-cy="model-type-folio"]',
    variantFolio: '[data-cy="variant-folio"]',
    variantBookFolio: '[data-cy="variant-bookfolio"]',
    materialGray: '[data-cy-sku="RM314"]',
    materialBrown: '[data-cy-sku="RM313"]',
    sepiaBrown: '[data-cy-sku="RM710"]',
    InkBlack: '[data-cy-sku="RM810"]',
    materialBlack: '[data-cy-sku="RM312"]',
    addToCartButton: '[data-cy="add-to-cart-btn"]',
    noThanks: '[data-cy="unselect-item"]',
    KeyboardLanguage: '[data-cy="keyboard-language"]'
  },
  CheckoutPage: {
    checkOutButton: '[data-cy="checkout"]',
    contactInformation: {
      email: '#email'
    },
    billingAddress: {
      firstName: '#shippingAddress\\.firstName',
      lastName: '#shippingAddress\\.lastName',
      addressLine1: '#shippingAddress\\.addressLine1',
      addressLine2: '#shippingAddress\\.addressLine2',
      postalCode: '#shippingAddress\\.zipCode',
      city: '#shippingAddress\\.city',
      phoneNumber: '[name="phoneInput"]',
      country: '[name="shippingAddress.country"]',
      continue: '[data-cy="address-form"] > .ark-button'
    },
    payment: {
      card: '#payment-solution-card',
      cardNumber: '#Field-numberInput',
      expiryYear: '#Field-expiryInput',
      cvc: '#Field-cvcInput'
    }
  }
}
