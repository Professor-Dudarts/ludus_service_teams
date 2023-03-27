/// <reference types="cypress"/>

describe('Get Requisição', () => {
    it.only("Validando GET da API Team", () => {
        cy.api({
            method: 'GET',
            url: '/team',
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response).has.property("headers");
        });

    })
});