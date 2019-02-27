'use strict';

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
    var webserver = require('gulp-webserver');

var paths = {
  src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcCSS: 'src/**/*.css',
  srcJS: 'src/**/*.js',
  tmp: './', // tmp folder
  tmpIndex: 'tmp/index.html', // index.html in tmp folder
  tmpCSS: 'tmp/**/*.css', // css files in tmp folder
  tmpJS: 'tmp/**/*.js', // js files in tmp folder
  dist: 'dist',
  distIndex: 'dist/index.html',
  distCSS: 'dist/**/*.css',
  distJS: 'dist/**/*.js'
};

gulp.task('sass', function(){

    return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('assets/css/'))
    .pipe(livereload());
});

//gulp.task('watch',['sass'], function(){
//  gulp.watch('scss/**/*.scss'); 
//  // Other watchers
//   
//   
//})
gulp.task('html', function(){
    return gulp.src('./*.html')
    .pipe(livereload());
})
gulp.task('watch', function(){
    console.log("sample");
    livereload.listen();
    gulp.watch('scss/**/*.scss',gulp.series('sass'));
      gulp.watch('./*html', gulp.series('html')); 
  gulp.watch('assets/**/*.js');
});


var gulp = require('gulp');
var browserify = require('gulp-browserify');
 
gulp.task('serve', function () {
  return gulp.src(paths.tmp)
    .pipe(webserver({
      port: 3000,
      livereload: true
    }));
});

livereload({ start: true })
