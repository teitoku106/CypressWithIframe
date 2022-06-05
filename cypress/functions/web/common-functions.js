/// <reference types="Cypress" />
///<reference types="cypress-iframe" />

import homePage from "../../elements/web/homePage";
import userData from "../../data/userData.json";

export async function navigateTo(urlInput) {
  await cy.visit(urlInput);
}

export async function createNewClient() {
  await cy.enter(homePage.iframe).then((getBody) => {
    getBody()
      .find(homePage.yourName).should("be.visible").click({ timeout: 10000 });
    getBody()
      .find(homePage.yourName).type(userData["new_account"][0]["yourName"]);
    getBody()
      .find(homePage.phoneNumber).should("be.visible").click({ timeout: 10000 });
    getBody()
      .find(homePage.phoneNumber).type(userData["new_account"][0]["phoneNumber"]);
    getBody()
      .find(homePage.emailAddress).should("be.visible").click({ timeout: 10000 });
    getBody()
      .find(homePage.emailAddress).type(userData["new_account"][0]["emailAddress"]);
    getBody()
      .find(homePage.companyName).should("be.visible").click({ timeout: 10000 });
    getBody()
      .find(homePage.companyName).type(userData["new_account"][0]["companyName"]);
  });
}

export async function selectIndustry(type) {
  await cy.enter(homePage.iframe).then((getBody) => {
    getBody().find(homePage.industry).should("be.visible").select(type);
  });
}

export async function termsAndConditionsCheckBox() {
  await cy.enter(homePage.iframe).then((getBody) => {
    getBody()
      .find(homePage.termAndConditionsCheckBox).should("be.visible").click({ force: true });
  });
}
