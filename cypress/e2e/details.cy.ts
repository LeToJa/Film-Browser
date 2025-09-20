describe('Details Page', () => {
  it('displays a film page', () => {
    cy.visit('/film/1')
    cy.get('#detail-page').should('exist')
    cy.get('.film-carousel').should('exist')
  })
})
