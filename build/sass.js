/*
  gulp sass
  - Author: Fryan
  - Modified: 2018-05-07
*/

const sass = require('gulp-sass')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

// task
gulp.task('sass', function() {
  gulp.src([
    path.plugins + 'bundle/bundle.css',
    path.srcAssets + '**/*.scss'
  ])
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({
      dirname: ''
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(path.buildAssets))
    .pipe(browserSync.stream())
    .on('finish', function () {
      console.clear()
    })
});