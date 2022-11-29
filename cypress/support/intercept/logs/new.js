const API = Cypress.env("API");
export default function () {
  return cy
    .intercept("POST", `${API}/logs`, {
      fixture: "log.json",
    })
    .as("request");
}
