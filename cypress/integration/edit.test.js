const URL = Cypress.env("URL");
const API = Cypress.env("API");
const CI_ENV = Cypress.env("ci");

import interceptEdit from "../support/intercept/logs/edit.js";

describe("Edit Page", () => {
  before(() => {
    if (CI_ENV) {
      interceptEdit();
    }
    cy.visit(`${URL}/logs/1/edit`);
  });

  it("Shows the header text", () => {
    cy.contains("Captain's Log");
    cy.contains("Edit");
  });

  it("Has a 'Back' link that has a link back to '/logs'", () => {
    cy.get('a[href*="/logs"]').contains("Back").contains("Back");
  });

  describe("Edit form", () => {
    // pay attention the capitalization!
    // cypress needs accuracy to find elements on the DOM\

    it("has a form with correct labels and fields", () => {
      // for this label/input use htmlFor/id: 'name'
      cy.get("label").contains("Captain's Name");
      cy.get("#captainName").should("have.attr", "type", "text");

      // for this label/input use htmlFor/id: 'title'
      cy.get("label").contains("Title");
      cy.get("#title").should("have.attr", "type", "text");

      // for this label/input use htmlFor/id: 'post'
      cy.get("label").contains("Post");
      cy.get("form > textarea").should("have.attr", "id", "post");

      // for this label/input use htmlFor/id: 'daysSinceLastCrisis'
      cy.get("label").contains("Days Since Last Crisis");
      cy.get("#daysSinceLastCrisis").should("have.attr", "type", "number");

      // for this label/input use htmlFor/id: 'mistakesWereMadeToday'
      cy.get("label").contains("Mistakes were made today");
      cy.get("#mistakesWereMadeToday").should("have.attr", "type", "checkbox");
    });

    it("can change the checkbox'", () => {
      cy.get("#mistakesWereMadeToday").check();
    });
    it("Can edit a log", () => {
      if (CI_ENV) {
        cy.intercept("PUT", `${API}/logs/1`, {
          fixture: "editLog.json",
        }).as("editLog");
        cy.get("form").submit();
        cy.wait("@editLog");
        console.warn(
          "Note, you will NOT see this new log because we mocked the functionality"
        );
        // go back to index to see the edit as well
        cy.visit(`${URL}/logs`);
      } else {
        cy.get("#captainName").clear().type("Karolin");
        cy.get("#title").clear().type("Silver Rocket");
        cy.get("form > textarea").type("!!!!!!");
        cy.get("form").submit();

        // confirm correct routing after submission
        cy.url().should("eq", "http://localhost:3000/logs/1");
        // pause for human confirmation
        cy.wait(500);
        // go back to index to see the edit as well
        cy.visit(`${URL}/logs`);
        // confirm update is on the index
        cy.get("td").eq(4).contains("Karolin");
      }
    });
  });
});
