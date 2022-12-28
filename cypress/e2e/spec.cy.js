/// <reference types="cypress"/>

describe('Basic Tests', () => {
  it('We have correct Home Page title', () => {
    cy.visit('http://localhost:4000/');

    //mocha syntax(for future reference)

    //way 1
    cy.contains('Home').should('exist');
    cy.contains('Nabeel').should('exist');
    cy.contains('Saniya').should('exist');

    //way 2
    cy.get('.dad-and-kids').should('exist');

    cy.get('div').should('exist');
    //first method of writing id
    cy.get('[id=next]').should('not.exist');
    //2nd method of writing id
    cy.get('#prev').should('not.exist');
  });
})

