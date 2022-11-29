const API = Cypress.env("API");
export default function () {
  return cy
    .intercept("GET", `${API}/logs`, {
      fixture: "logs.json",
    })
    .as("request");
}
