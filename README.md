# Remarkable Test Assignment

## Test Cases Automated

1. Product purchase flow from home page
2. Product purchase flow from store page

## Tools Used

- Cypress

## Scripting Language Used

- TypeScript

## Reporting

- Mochaawesome

## Steps to Execute

1. Clone the project.
2. Run `npm install` to download all dependencies. (Please install Node and Node Package Manager if they are not already installed on your machine).
3. Run the following command to execute the tests:
4. Run the following command to generate a consolidated output file for all the tests:
5. Run the following command to generate the final test execution report in HTML format. You will find the `output.html` file generated in the `screenshots` folder:

6. In case of any test failures, you will also see the attached screenshots in the test report.

## Approach

Based on my observation of the test cases and the reMarkable website, I see that the product purchase flow is crucial from an end consumer's perspective. This allows customers to view and check out any product, such as the reMarkable 2.

So, I have designed tests driven by different products using a Data-Driven Approach. Though I see that as of now there is only one main product with different accessories, I assume in the future there might be reMarkable 3, 4, 5, etc., with different sets of accessories for each product.

The framework I designed can be scaled to test product purchases from the home page and product page for either one specific product like reMarkable 2 or multiple products like RM 1, 2, 3, 4, 5, etc., and also on multiple environments with different combinations of accessories on each product.

## Important Configurations Explained

1. I have an environment variable that can be passed through the command line to execute tests in different environments (e.g., dev, sit, uat).

2. I have an environment variable that can be passed through the command line where you can specify if you want to test a specific product. If nothing is passed, it defaults to reMarkable 2. However, it can be configured to run on all products.

3. `Data.json` residing in the `fixtures` folder contains all the data required to test different products and accessory selections. If reMarkable introduces new products, updating the JSON file with those products should be sufficient to run the tests (assuming UI consistency is maintained).

4. I've created a `locators.ts` file under the `support` folder, which serves as a locator repository. This helps keep all locators stored in one place and makes updates easier.





