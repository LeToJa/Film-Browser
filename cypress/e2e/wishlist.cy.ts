describe('Details Page', () => {
  it('displays an empty wishlist', () => {
    cy.visit('/wishlist')
    cy.get('.loading-message').should('exist')
  })

  it('displays a working wishlist', () => {
    cy.visit('/film/1')
    cy.get('.wishlist-button').should('exist').click()
    cy.visit('/wishlist')
    cy.get('.film-card').should('exist')
  })
})
