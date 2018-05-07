/*
  gulp watch
  - Version: 1.0.1-alpha.1
  - Author: Fryan
  - Modified: 2018-05-07
*/

const watch = require('gulp-watch')

// watch
gulp.task('watch', function () {
  watch([
    path.srcAssets + '**/*.scss',
    './plugins/bundle.css'
  ], function () {
    gulp.start('sass') // sass.js
  })

  watch([
    path.srcAssets + '**/*.+(jpg|png|gif|svg)',
    path.src + 'robot.txt'
  ], function () {
    gulp.start('duplicate') // duplicateFiles.js
  })

  watch([
    path.src + '**/*.{html,tpl}',
    path.template + '**/*.tpl',
    path.components + '**/*.tpl'
  ], function () {
    gulp.start('buildHTML') // handleHTML.js
  })

  watch([
    path.plugins + '**/*',
    '!' + path.plugins + 'bundle/**/*'
  ], function () {
    gulp.start('webpack') // javascript.js
  })
});


