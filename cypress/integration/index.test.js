import interceptIndex from "../support/intercept/logs/index.js";

// From cypress.json env
const URL = Cypress.env("URL");
// Already set to true as default on circleci
// importing this value through plugins/index.js
const CI_ENV = Cypress.env("ci");

describe("Index page", () => {
  before(() => {
    if (CI_ENV) {
      interceptIndex();
    }
    cy.visit(`${URL}/logs`);
  });

  it("Has a link to each log's show page", () => {
    const regex = /logs\/(\d+)/;
    cy.get(".Log a").each(($item) => {
      cy.wrap($item).invoke("attr", "href").should("match", regex);
    });
  });

  it("Can load index page and has navigation to New page", () => {
    cy.get("a").contains("New Log").should("have.attr", "href", `/logs/new`);
  });
});
