var gulp = require('gulp'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel');

var SRC = './src',
    DIST = './dist';

gulp.task('scripts', function() {
  gulp.src(SRC + '/Button.js')
    .pipe(babel())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(DIST));
});

gulp.task('clean', function(callback){
  return del([DIST], callback);
});

gulp.task('dist', ['clean', 'scripts']);
gulp.task('default', ['dist']);
