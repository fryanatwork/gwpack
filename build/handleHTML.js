/*
  gulp template generator
  - Author: Fryan
  - Modified: 2018-05-07
*/

const extender = require('gulp-html-extend')
const fileinclude = require('gulp-file-include')
const replaceInclude  = require('gulp-replace-include')

// workflow
gulp.task('extender', function () {
  gulp.src([
    path.src+'**/*.html'
  ])
  .pipe(extender({
    annotations: false,
    verbose: false,
    root: path.template
  }))
  .pipe(fileinclude({
    prefix: '@@fileinclude>',
    basepath: path.components
  }))
  .pipe(replaceInclude(fileIncludeReplactment))
  .pipe(gulp.dest(path.build))
  .on('finish', function () {
    console.clear()
  })
})

// task
gulp.task('handleHTML', [
  'extender'
], function () {
  console.clear()
})