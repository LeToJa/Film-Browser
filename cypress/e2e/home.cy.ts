describe('Home Page', () => {
  it('displays homepage and carousels', () => {
    cy.visit('/')
    cy.contains('Homepage')
    cy.get('.film-carousel').should('exist')
  })
})
