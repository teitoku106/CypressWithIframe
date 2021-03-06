/// <reference types="Cypress" />

import * as commonFunction from "../../functions/web/common-functions";

describe("Create a new user through iframe on Website", () => {
  beforeEach(async () => {
    await commonFunction.navigateTo(Cypress.env("HOME_URL"));
  });

  it("createNewUser", async () => {
    await commonFunction.createNewClient(); //input [Your name] - [Phone Number] - [Email address] - [Company name]
    await commonFunction.selectIndustry("Health");  //input [Select type of Industry]
    await commonFunction.termsAndConditionsCheckBox(); //Click checkbox for Terms And Conditions
  });
});
