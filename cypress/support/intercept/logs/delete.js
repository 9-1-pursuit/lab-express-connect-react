const API = Cypress.env("API");
export default function () {
  return cy
    .intercept("GET", `${API}/logs/2`, {
      fixture: "editLog.json",
    })
    .as("request");
}
