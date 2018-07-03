/*
  gulp template generator
  - Author: Fryan
  - Modified: 2018-05-07
*/

const inject = require('gulp-inject')

// index
gulp.task('injectScript', [
    'injectScript-WorkFlow'
  ], function () {
    // console.clear()
})

// extender
gulp.task('injectScript-WorkFlow', function () {

  var source = gulp.src([
    path.build + '**/*.js',
    path.build + '**/*.css'
  ], {
    read: false
  })

  gulp.src(path.build + '**/*.html')
    .pipe(inject(source, {
      removeTags: true,
      relative: true,
      addRootSlash: false,
      addPrefix: '.',
      quiet: true
    }))
    .on('error', function () {})
    .pipe(gulp.dest(path.build))
    .on('finish', function () {
      // console.clear()
    })
})