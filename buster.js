var config = module.exports;

config["My tests"] = {
  rootPath: "./",
  environment: "browser",
  sources: [
    "dist/CoClass.min.js"
  ],
  tests: [
    "src/**/*.spec.js"
  ]
};
