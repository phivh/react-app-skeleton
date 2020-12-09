describe('Github search az', () => {
  it('should assert that search title is correct', () => {
    cy.visit('http://localhost:3000');
    cy.title().should('include', 'Github Search AZ');
  });

  it('should be able to start', () => {
    cy.findByTestId('header')
      .should('contain', 'Heading')
  });

  it('should be able to view the private area', () => {
    cy.findByTestId('layout')
      .should('have.length', 1)
      .findByTestId('filter-area')
      .should('have.length', 1);
  });

});
