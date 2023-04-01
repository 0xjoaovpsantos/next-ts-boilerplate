/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Count number start with 0', () => {
    cy.get('[data-test=count-number]').should('have.text', '0');
  });

  it('When click in the Button, count number should be 1', () => {
    cy.get('[data-test=count-button]').first().click();

    cy.get('[data-test=count-number]').should('have.text', '1');
  });
});
