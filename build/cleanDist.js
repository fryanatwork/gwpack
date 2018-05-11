/*
  gulp clean dist
  - Author: Fryan
  - Modified: 2018-05-07
*/

const clean = require('gulp-clean')

// task
gulp.task('clean', function () {
  return gulp.src(path.build)
    .pipe(clean({ force: true, reade: false }))
    .on('finish', function () {
      console.clear()
    })
});