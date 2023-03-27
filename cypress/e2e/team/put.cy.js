/// <reference types="cypress"/>

describe('PUT requisão', () => {
    it.only("Validando PUT da API Team", () => {
        cy.request({
            method: 'PUT',
            url: 'http://127.0.0.1:8100/api/team',
            body: {
                team_id: 3,
                coach_id: 4,
                popular_name: "agora mudou",
                nickname_club: "Mengão",
                name_club: "Clube de Regatas do Flamengo",
                acronym_club: "CRF",
                shield_club: "https://logodetimes.com/times/flamengo/logo-flamengo-4096.png",
                coach_name: "Dorival Júnior"
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            cy.log(response.body);
        });

    })
});