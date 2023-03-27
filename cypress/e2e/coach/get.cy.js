/// <reference types="cypress"/>

describe('Get Requisição', () => {
  it.only("Validação do Get da API Coach", () => {
    let attributos = ["age", "name", "coach_id"]
    cy.api({
      method: 'GET',
      url: '/coach',
      headers: {
        accept: "application/json"
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response).has.property("headers");
      for (let i = 0; i < attributos.length; i++) {
        expect(response.body).contain(i);
      }

    });

  })
});