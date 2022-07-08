const httpServer = require("http-server");
const PORT = 8000;
let server = null;

exports.config = {
  runner: "local",
  framework: "mocha",
  mochaOpts: {
    timeout: 40000,
  },
  reporters: ["spec"],
  specs: ["./specs/*.test.js"],

  logLevel: "warn",
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
    },
  ],
  baseUrl: "https://www.saucedemo.com",
  waitforTimeout: 10000,
  services: ["chromedriver"],
  timeout: 60000,

  onPrepare() {
    // Start local server to host app under test.
    server = httpServer.createServer({ root: `${__dirname}/../` });
    server.listen(PORT);
  },

  onComplete() {
    server.close();
  },
};
