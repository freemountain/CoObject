var config = module.exports;

config["My tests"] = {
  rootPath: "./",
  environment: "browser",
  sources: [
    "dist/CoClass.js"
  ],
  tests: [
    "src/**/*.spec.js"
  ]
};
