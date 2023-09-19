# remarkableTestAssignment

Test cases automated
1.Product purchase flow from home page
2.product purchase flow from store page

Tool Used
Cypress

Scripting Language used
Typescript

Reporting 
Mochaawesome

Steps to execute
1.clone the project
2.Run npm install to download on depenedencies (Please install node and node package manager if its not already in your machine)
3.Run npx cypress run --env productName='reMarkable 2',env='prod' --reporter mochawesome --headed to run the tests
4.Run npx mochawesome-merge cypress/reports/*.json -o cypress/reports/output.json to geenrate consolidate output file for all the tests
5.Run npx marge cypress/reports/output.json --reportDir ./ --inline to generate the final test execution report in html format. you will find output.html file generated in screenshots folder
6.In case there are any failures in test failures you will also see the attached screenshots in the test report

Approach:
Based on my observation of the test cases and the reMarkable website, I see that the product purchase flow is crucial from an end consumer's perspective. This allows customers to view and check out any product, such as the reMarkable 2
So I have designed tests driven by different products(Data Driven Approach).Though I see that as of now there is only one main product with different accessories user can buy I assume in future there might be remarkable 3 , 4 ,5 etc with different set of
accessories for each product. 

So the framework I designed can be scaled to test product purchase from home page and product page for either 1 specific product like remarkable2 ,or multiple products like rm 1,2,3,4,5 etc and also  on multiple environments with different combinations of accessories on each product 
