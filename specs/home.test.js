const httpServer = require("http-server");
const percySnapshot = require("@percy/webdriverio");
const sauceLabHomePage = require("../pages/sauceLab.home.page.js");
const sauceLabLoginPage = require("../pages/sauceLab.login.page.js");

describe("home test", function () {
  const TEST_URL = `https://www.saucedemo.com/`;

  it("the user at sauce labs homepage", async function () {
    await browser.url("https://www.saucedemo.com/");
    await sauceLabLoginPage.Login();
    expect(await browser.getTitle()).toEqual("Swag Labs");
    await percySnapshot(browser, "home page displayed");
  });
  /*
  it("The user add products to the shopping cart", async function () {
    await browser.url("https://www.saucedemo.com/inventory.html");
    await sauceLabHomePage.ClickFirstProduct();
    await sauceLabHomePage.ClickSecondProduct();
    expect(await sauceLabHomePage.shoppingCartBadge.getText()).toEqual("2");
    await percySnapshot(browser, "Shopping cart badge increase");
  });*/
});
