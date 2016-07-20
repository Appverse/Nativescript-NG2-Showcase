require('reflect-metadata');
var loginComponent = require("../pages/login/login.component"); 

describe("login unit test", () => {
  beforeEach(() => {
    this.loginPage = new loginComponent.LoginPage();
  })
  it("check login function", () => {
    expect(this.loginPage.login("samplemail@hotmail.com","0123456789")).toBe(true);
    expect(this.loginPage.login("samplemailhotmail.com","0123456789")).toBe(false);
  });
  it("check register function", () => {
    expect(this.loginPage.register("samplemail@hotmail.com", "0123456789", "0123456789")).toBe(true);
    expect(this.loginPage.register("samplemail@hotmail.com", "0123", "0123")).toBe(false);
    expect(this.loginPage.register("samplemailhotmail.com", "0123456789", "0123456789")).toBe(false);
    expect(this.loginPage.register("samplemailhotmail.com", "0123456789", "01234567")).toBe(false);
  });
});
