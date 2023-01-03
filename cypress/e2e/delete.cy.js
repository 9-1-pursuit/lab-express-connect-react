const URL = Cypress.env("URL");
const API = Cypress.env("API");
const CI_ENV = Cypress.env("ci");

import interceptDelete from "../support/intercept/logs/delete.js";

describe("Delete functionality", () => {
  if (CI_ENV) {
    before(() => {
      interceptDelete();
      cy.visit(`${URL}/logs/2`);
    });
    it("can go to the show page and click a delete button", () => {
      cy.intercept("DELETE", `${API}/logs/2`).as("deleteLog");
      cy.get("button").contains("Delete").click();
      cy.wait("@deleteLog");
    });
  } else {
    before(() => {
      cy.visit(`${URL}/logs/new`);
    });
    it("can create a log", () => {
      cy.get("#captainName").type("Captain Beefheart");
      cy.get("#title").type("Alice in Blunderland");
      cy.get("form > textarea").type("Ice cream for crows");
      cy.get("#mistakesWereMadeToday").check();
      cy.get("form").submit();
    });
    it("can go to the show page of the created log", () => {
      cy.get("a").last().click();
    });
    it("can delete the created log", () => {
      cy.get("button").contains("Delete").click();
      cy.visit(`${URL}/logs`);
      cy.get("td").should("not.contain", "Captain Beefheart");
    });
  }
});
