export const STAGE: string = Cypress.env('stage')
export const productName: string = Cypress.env('productName')
export const applicationUrl: string = Cypress.env(STAGE + 'Url')
