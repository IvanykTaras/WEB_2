var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task("sass", function(){
    return gulp.src(["sass/**/*.sass","sass/**/*.scss"])
    .pipe(sass({outputStyle:"expanded"}).on("error", sass.logError))
	.pipe(notify("ALL GOOD!"))
    .pipe(gulp.dest("css"));  
})

gulp.task('default', function () {
  return gulp.src("css/*.css")
    .pipe(concatCSS("bundle.css"))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(rename("bundle.min.css"))
    .pipe(notify("ALL GOOd!"))
    .pipe(gulp.dest("app/"))
});

/*
gulp.task("watch", function(){
    gulp.watch("css/*.css", ['default'])
})*/

gulp.task("watch",function(){
    gulp.watch(["sass/**/*.sass","sass/**/*.scss"],["sass"]);
})






