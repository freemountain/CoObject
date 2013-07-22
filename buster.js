var config = module.exports;

config["My tests"] = {
  rootPath: "./",
  environment: "browser",
  sources: [
    "dist/Co.js"
  ],
  tests: [
    "src/**/*.spec.js"
  ]
};
