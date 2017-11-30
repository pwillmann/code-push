"use strict";

var gulp = require("gulp");
var merge = require("merge2");
var plugins = require("gulp-load-plugins")();
var jeditor = require("gulp-json-editor");

function contentTask(cwd) {
    var options = {
        cwd: cwd,
        base: "./" + cwd
    };

    return gulp.src([
        "{script,test}/**/*.{css,ejs,html,js,json,png,xml}",
        "test/resources/**/*",
        "*.{public,private}",
        "package.json",
        "plugin.xml",
        "server.js",
        "web.config",
        ".npmignore",
        "README.md"
    ], options)
    .pipe(gulp.dest("bin", options));
}
gulp.task("content-fix-cli-sdk-dep", function(done) {
    return gulp.src("cli/bin/package.json", {base: "./"})
        .pipe(jeditor(function(json) {
            json.dependencies["code-push"] = "file:../../sdk/bin";
            return json; // must return JSON object. 
            }))
        .pipe(gulp.dest("./"));
});
gulp.task("content-sdk", function() { return contentTask("sdk"); });
gulp.task("content-cli", function() { return contentTask("cli"); });
