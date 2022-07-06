const httpServer = require("http-server");
const percySnapshot = require("@percy/webdriverio");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");

describe("login into sauce lab", function () {
  const PORT = 8000;
  const TEST_URL = `https://www.saucedemo.com/`;

  let server = null;

  before(() => {
    // Start local server to host app under test.
    server = httpServer.createServer({ root: `${__dirname}/../` });
    server.listen(PORT);
  });

  after(() => {
    // Shut down the HTTP server.
    server.close();
  });

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
