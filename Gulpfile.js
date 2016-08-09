var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

var SRC = './src',
    DIST = './dist';

gulp.task('scripts', function() {
  gulp.src(SRC + 'js/index.js')
    .pipe(babel())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(DIST));
});

gulp.task('clean', function(callback){
  return del([DIST], callback);
});

gulp.task('dist', ['clean', 'scripts']);
gulp.task('default', ['dist']);
