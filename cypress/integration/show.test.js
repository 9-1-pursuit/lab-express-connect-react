// If tests are failing because Picard is no longer your first entry
// restart your express server
// in order to rest your data
import interceptShow from "../support/intercept/logs/show.js";
const URL = Cypress.env("URL");
const CI_ENV = Cypress.env("ci");

describe("Show Page", () => {
  before(() => {
    if (CI_ENV) {
      interceptShow();
    }
    cy.visit(`${URL}/logs/0`);
  });

  it("shows the header text", () => {
    cy.contains("Captain's Log");
    cy.contains("Show");
  });

  describe("log with its information", () => {
    it("shows the 'title' with 'captainName'", () => {
      // note that the "header" of this log's card is "Courage - By Picard"
      // you may need to add " - By " between the two pieces of data
      cy.contains("Courage - By Picard");
    });

    it("shows the 'post'", () => {
      cy.contains("Courage can be an emotion too.");
    });

    it("shows the 'daysSinceLastCrisis'", () => {
      // the piece of data for this test is "100"
      // everything before the 100 you're expected to add
      cy.contains("Days since last crisis: 100");
    });
  });

  it("has a 'Back' link that takes us back to '/logs'", () => {
    cy.get("a").invoke("attr", "href").should("eq", "/logs");
  });
  it("has an 'Edit' link that takes us to '/logs/0/edit'", () => {
    cy.get("a").eq(3).invoke("attr", "href").should("eq", "/logs/0/edit");
  });
});
