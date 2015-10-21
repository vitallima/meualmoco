var gulp = require('gulp');
var stylus = require('gulp-stylus');
var notify = require('gulp-notify');

// Get one .styl file and render 
gulp.task('default', function () {
  gulp.src('./css/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
    .pipe(notify('Done!'));
});

// Default gulp task to run
gulp.task('watch', function(){
	gulp.watch('./css/main.styl', ['default'])
});