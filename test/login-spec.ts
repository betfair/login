/// <reference path='../node_modules/@types/mocha/index.d.ts' />

import { Login } from "../src/login";
import * as chai from "chai";
import * as dotenv from "dotenv";
dotenv.config();

const expect = chai.expect;

// describe("Login", () => {
//   it("login me in", function (done) {
//     var bfLogin = new Login(
//       <string>process.env.BFUSERNAME,
//       <string>process.env.BFPASSWORD,
//       <string>process.env.BFAPPKEY);

//     bfLogin.login().then(function (token) {
//       expect(token).to.not.be.undefined;
//       expect(token.length).to.be.greaterThan(10);
//       done();
//     });
//   });
// });