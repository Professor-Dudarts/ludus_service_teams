/// <reference types="cypress"/>

describe('POST requisão', () => {
    it.only("Validando POST da API Team", () => {
        cy.request({
            method: 'POST',
            url: '/team',
            body: {
                team_id: 3,
                coach_id: 4,
                popular_name: "salve",
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