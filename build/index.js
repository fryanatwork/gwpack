/*
  gulp task settings
  - Version: 1.0.1-alpha.1
  - Author: Fryan
  - Modified: 2018-05-07
*/

// dev
gulp.task('default', [
  'webserver',
  'watch',
  'build'
]);

// build
gulp.task('build', [
  'sass',
  'webpack',
  'duplicate',
  'buildHTML'
]);

// underbuild
gulp.task('underbuild', [
  'sass',
  'webpack',
  'duplicate',
  'buildHTML',
  'minifyHTML'
]);