const API = Cypress.env("API");
export default function () {
  return cy
    .intercept("GET", `${API}/logs/0`, {
      fixture: "log.json",
    })
    .as("request");
}
