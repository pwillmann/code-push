"use strict";

var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("build-sdk", ["content-sdk", "scripts-sdk"]);

gulp.task("build-cli", ["content-and-fix-cli", "scripts-cli"]);

gulp.task("build", ["build-sdk", "build-cli"]);

gulp.task("content-and-fix-cli", function(done) {
    runSequence("content-cli", "content-fix-cli-sdk-dep", done);
});
