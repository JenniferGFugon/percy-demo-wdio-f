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
};
