var gulp = require("gulp");
var install = require("gulp-install");
var path = require("path");
var runSequence = require("run-sequence");

gulp.task("install-cli", function(done) {
    return gulp.src(path.join(__dirname, "..", "cli", "package.json"))
        .pipe(install());
});

gulp.task("install-sdk", function(done){
    return gulp.src(path.join(__dirname, "..", "sdk", "package.json"))
        .pipe(install());
});

gulp.task("install", function(done) {
    runSequence("install-sdk", "build-sdk","content-fix-cli-sdk-dep", done);
});
