# cypress-api-automation


An example of API test automation using Cypress to automate the Go REST API POST method (https://gorest.co.in).  

  Requires Node.js.

  1. To install Cypress, type on the command prompt:
  
    npm install cypress

  2. To create the file package.json, type:

    npm init -y

  3. To execute the tests use:
  
    npx cypress open

  4. It's necessary to set up the Go REST TOKEN_API in the cypress.json file. To obtain the token, access the following URL:
  
    https://gorest.co.in/my-account/access-tokens