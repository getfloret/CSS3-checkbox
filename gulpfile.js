//Gulp plugin
var gulp = require("gulp"),//http://gulpjs.com/
		util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
		sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
		minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
		rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
		log = util.log;
 
var sassFiles = "scss/*.scss";

gulp.task("sass", function(){ 
		log("Generate CSS files " + (new Date()).toString());
    gulp.src(sassFiles)
            .pipe(sass({ style: 'expanded' }))
            .pipe(gulp.dest("css"))
            .pipe(rename({suffix: '.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest('css'));
});

gulp.task("watch", function(){
    log("Watching scss files for modifications");
    gulp.watch(sassFiles, ["sass"]);
});

gulp.task("default", ["sass"]);