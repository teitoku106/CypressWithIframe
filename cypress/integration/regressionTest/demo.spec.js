/// <reference types="Cypress" />

import * as commonFunction from "../../functions/web/common-functions";

describe("example with Cypress", () => {
  beforeEach(async () => {
    await commonFunction.navigateTo(Cypress.env("HOME_URL"));
  });

  it("createNewUser", async () => {
    //input [Your name] - [Phone Number] - [Email address] - [Company name]
    await commonFunction.createNewClient();
    //input [Select type of Industry]
    await commonFunction.selectIndustry("Health");
    //Click checkbox for Terms And Conditions
    await commonFunction.termsAndConditionsCheckBox();
  });
});
