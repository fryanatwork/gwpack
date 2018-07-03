/*
  gulp watch
  - Author: Fryan
  - Modified: 2018-05-07
*/

const watch = require('gulp-watch')

// watch
gulp.task('watch', function () {

  // sass
  watch([
    path.srcAssets + '**/*.scss',
    './plugins/bundle.css'
  ], function () {
    gulp.start('sass')
  })

  // duplicateFiles
  watch([
    path.srcAssets + '**/*.{jpg,png,gif,svg}',
    path.src + 'robot.txt',
    path.plugins + 'bundle/*.js'
  ], function () {
    gulp.start('duplicateFiles')
  })

  // handleHTML
  watch([
    path.src + '**/*.{html,tpl}',
    path.template + '**/*.tpl',
    path.components + '**/*.tpl'
  ], function () {
    gulp.start('handleHTML')
  })

  // javascript
  watch([
    path.plugins + '**/*',
    '!' + path.plugins + 'bundle/**/*'
  ], function () {
    gulp.start('javascript')
    })

  // // injectScript
  // function inject () {
  //   watch([
  //     path.build + '**/*.{html,css,js}'
  //   ], function () {
  //     gulp.start('injectScript')
  //   })
  // }
  // setTimeout(function () {
  //   inject()
  // }, 1000)

  // browserSync
  watch([
    path.build + '**/*',
    '!' + path.build + '**/*.js'
  ], function () {
    browserSync.stream()
  })
});


