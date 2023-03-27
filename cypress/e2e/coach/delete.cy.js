/// <reference types="cypress"/>

describe('DELETE', () => {
    it.only("Validando Delete da API Coach", () => {
        cy.request({
            method: 'DELETE',
            url: '/coach',
            body: {
                coach_id: 7,
                name: "novo coach",
                age: 32
            }
        }).then(response => {
            expect(response.status).to.eq(200);
        });

    })
});