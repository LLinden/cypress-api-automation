/// <reference types="Cypress" />

export class ApiRest {

    updateToken = (tk) => {
        let token = tk;
        if (tk == '')
            token = `${Cypress.env("TOKEN_API")}`;
        
        if (tk == 'SN')
            token = '';

        return token;
    }

    executePost = (url, body, tk = '') => {
        const token = this.updateToken(tk);

        this.logRequest("POST", url, token, JSON.stringify(body));

        return cy.request({
            "method": 'POST',
            "url": url,
            "headers": {
              "accept": "application/json",
              "content-type": "application/json",
              "Authorization": "Bearer " + token,
            },
            "body": body,
            "failOnStatusCode": false
        });
    }

    logRequest = (method, url, token, body) => {
        cy.log('================================');
        cy.log(`Method: ${method}` );
        cy.log(`URL: ${url}` );
        cy.log(`Token: ${token}` );
        if (body != "") {
            cy.log(`Body: ${body}`);
        }
    }
}