/// <reference types="cypress"/>

describe('Enviar requisição DELETE para excluir um time existente', () => {
    it.only("Validando DELETE da API Team", () => {
        cy.request({
            method: 'DELETE',
            url: '/team',
            body: {
                team_id: 1,
                coach_id: 1,
                popular_name: "Corinthians",
                nickname_club: "Timão",
                name_club: "Sport Club Corinthians Paulist",
                acronym_club: "SCCP",
                shield_club: "https://logodetimes.com/times/corinthians/logo-corinthians-4096.png",
                coach_name: "Fernando Lázaro"
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            cy.log(response.body);
        });

    })
});