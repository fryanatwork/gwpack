/*
  gulp template generator
  - Author: Fryan
  - Modified: 2018-05-07
*/

const htmlmin = require('gulp-html-minifier')
const util = require('gulp-util')

// task
gulp.task('minifyHTML', function () {
  setTimeout(function() {
    gulp.src(path.build + '**/*.html')
      .pipe(htmlmin({collapseWhitespace: true,removeComments: true}))
      .pipe(gulp.dest(path.build))
      .on('finish', function () {
        // console.clear()
        util.log('[Underbuild success!]')
      })
    }, 500);
})

// task
gulp.task('underbuild', [
  'minifyHTML'
], function () {
  // console.clear()
})