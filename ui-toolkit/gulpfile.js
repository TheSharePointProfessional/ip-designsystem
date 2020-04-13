const package = require("./package.json");
const webpack = require("webpack");
const path = require("path");
const gulp = require("gulp");
const build = require("@microsoft/sp-build-web");
const gulpSequence = require("gulp-sequence");
const GulpCore = require("@microsoft/gulp-core-build-serve/lib/ServeTask");
// check if gulp dist was called
if (process.argv.indexOf("dist") !== -1) {
  // add ship options to command call
  process.argv.push("--ship");
}

const getAcronym = (str) => str.match(/\b(\w)/g).join("");

build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    generatedConfiguration.plugins.push(
      new webpack.DefinePlugin({
        SC_PREFIX: JSON.stringify(getAcronym(package.name).toLowerCase()),
      })
    );
    generatedConfiguration.resolve.alias = {
      "ui-toolkit": path.resolve(__dirname, "./lib/ui-toolkit/"),
      docs: path.resolve(__dirname, "./lib/docs/"),
    };
    return generatedConfiguration;
  },
});

build.addSuppression(
  "Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe."
);

// Create clean distrubution package
gulp.task("dist", gulpSequence("clean", "bundle", "package-solution"));
// Create clean development package
gulp.task("dev", gulpSequence("clean", "bundle", "package-solution"));

var watch = require("gulp-watch");
gulp.task("small-serve", () => {
  let task = new GulpCore.ServeTask("small-serve", {
    initialPage:
      "https://skylinespark.sharepoint.com/sites/apps/ClientSideAssets/Events/Debug.aspx",
  });
  task.buildConfig = {
    rootPath: ".",
  };
  task.taskConfig.https = true;
  task.executeTask(gulp, () => {
    console.log("complete");
  });
  // Return a watch to keep it open
  return watch("./src/**/*.ts");
});

build.initialize(gulp);
