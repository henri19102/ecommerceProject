/* eslint-disable no-undef */
describe("Note app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", function () {
    cy.contains("ecommerce");
  });

  it("login form can be opened", function () {
    cy.contains("login").click();
  });

  //   it("user can log in", function () {
  //     cy.contains("login").click();
  //     cy.get("#nameInput").type("testi timo");
  //     cy.get("#passwordInput").type("testitimo");
  //     cy.contains("Log In").click();
  //     cy.contains("logout");
  //   });

  //   it("products are loaded from db", function () {
  //     cy.contains("Products").click();
  //     cy.contains("Add to cart");
  //     cy.get("#searchProduct").type("shir");
  //     cy.contains("Add to cart");
  //   });
  // })
});
