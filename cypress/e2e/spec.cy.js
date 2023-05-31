describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://google.com");
    cy.get("#L2AGLb > .QS5gu").click();
  });
});
