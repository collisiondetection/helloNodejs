describe('Hello World Page', () => {
  it('successfully loads and displays greeting', () => {
    cy.visit('http://localhost:3000')  // Change the URL if your app is running on a different one
    cy.contains('Hello World!')       // Checks if the "Hello World!" text is in the document
  });
});
