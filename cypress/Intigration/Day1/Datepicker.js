describe('datepicker', () => {
    it('test1', () => {
        cy.visit('https://jqueryui.com/datepicker/');

        cy.frameLoaded('.demo-frame');

        //cy.iframe().contains('Date: ').type('07/07/2024{enter}');

        cy.iframe().xpath('//input[@class="hasDatepicker"]').type('08/05/1997{enter}');

        
    });
});