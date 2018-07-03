/*
  gulp task settings
  - Author: Fryan
  - Modified: 2018-05-07
*/

// dev
gulp.task('default', [
  'webserver',
  'watch',
  'build'
], function () {
  // console.clear()
});

// build
gulp.task('build', [
  'sass',
  'webpack',
  'duplicateFiles',
  'handleHTML'
], function () {
  // console.clear()
});