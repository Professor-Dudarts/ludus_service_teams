/// <reference types="cypress"/>

describe('PUT requisão', () => {
    it.only("Validando PUT da API Coach", () => {
        cy.request({
            method: 'PUT',
            url: '/coach',
            body: {
                coach_id: 5,
                name: "novo coach3",
                age: 12
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            cy.log(response.body);
        });

    })
});