/*
  gulp template generator
  - Version: 1.0.1-alpha.1
  - Author: Fryan
  - Modified: 2018-05-07
*/

const inject = require('gulp-inject')
const extender = require('gulp-html-extend')
const htmlmin = require('gulp-html-minifier')
const fileinclude = require('gulp-file-include')
const replaceInclude  = require('gulp-replace-include')

// index
gulp.task('buildHTML', ['extender'], function () {
})

// inject script
function injectScript() {

  setTimeout(function() {
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
        addPrefix: '.'
      }))
      .pipe(gulp.dest(path.build))
      .pipe(browserSync.stream())
    }, 1000);
}

// extender
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
  injectScript()
})

// task
gulp.task('minifyHTML', function () {
  setTimeout(function() {
    gulp.src(path.build + '**/*.html')
      .pipe(htmlmin({collapseWhitespace: true,removeComments: true}))
      .pipe(gulp.dest(path.build))
    }, 500);
})