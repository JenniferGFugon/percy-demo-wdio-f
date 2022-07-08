//const httpServer = require("http-server");
const percySnapshot = require("@percy/webdriverio");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");

describe("login into sauce lab", function () {
  const TEST_URL = `https://www.saucedemo.com/`;

  it("the user at the login  page", async function () {
    await browser.url(TEST_URL);
    expect(await browser.getTitle()).toEqual("Swag Labs");
    await percySnapshot(browser, "loads the souce lab page");
  });

  it("The user login into the page", async function () {
    await sauceLabLoginPage.Login();
    await percySnapshot(browser, "home page");
  });
});
