/// <reference types="cypress"/>

describe('POST requisão', () => {
    it.only("Validando  POST da API Coach", () => {
        cy.request({
            method: 'POST',
            url: '/coach',
            body: {
                name: "novo coach",
                age: 32
            }
        }).then(response => {
            expect(response.status).to.eq(200);
        });

    })
});