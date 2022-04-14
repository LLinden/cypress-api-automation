/// <reference types="cypress" />

import { ApiRest } from "../../support/requests/apiRest.js";

describe("Register User", () => {
  const apiRest = new ApiRest();
  const url = `${Cypress.env("GO_REST")}` + "/public/v2/users";
  let payload;
  let chance = require("chance").Chance();
  let name = chance.name();
  let email = chance.email();
  let gender = chance.gender();

  beforeEach(() => {
    cy.fixture("api/user.json").then((p) => {
      payload = p;
      payload.name = name;
      payload.email = email;
      payload.gender = gender;
    });
  });

  it("should successfully register user", () => {
    apiRest.executePost(url, payload).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.id).to.not.be.null;
    });
  });

  it("should return error message when name is null", () => {
    payload.name = null;
    apiRest.executePost(url, payload).should((response) => {
      expect(response.status).to.eq(422);
      expect(response.body[0].field).to.eq("name");
      expect(response.body[0].message).to.eq("can't be blank");
    });
  });
});
