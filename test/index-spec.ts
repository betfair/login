/// <reference path='../node_modules/@types/mocha/index.d.ts' />

import index = require("../src/index");
import * as chai from "chai";

const expect = chai.expect;
describe("index - Login", () => {
  it("should provide Login", () => {
    expect(index.Login).to.not.be.undefined;
  });
});
