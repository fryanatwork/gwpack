/*
  gulp clean dist
  - Version: 1.0.1-alpha.1
  - Author: Fryan
  - Modified: 2018-05-07
*/

const clean = require('gulp-clean')

// task
gulp.task('clean', function () {
  return gulp.src(path.build)
    .pipe(clean({force: true, reade: false}))
});