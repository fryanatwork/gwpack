/*
  using gulp to make webpack handle plugin, javascript, jquery
  - Version: 1.0.1-alpha.1
  - Author: Fryan
  - Modified: 2018-05-07
*/

const webpack = require('webpack')
const gulpWebpack = require('webpack-stream')

// task
gulp.task('webpack', function () {
  gulp.src(path.plugins + 'main.js')
    .pipe(gulpWebpack(
      require('../webpack.config.js'), webpack)
    )
    .pipe(gulp.dest('./plugins/bundle/'))

  gulp.src(path.plugins + 'bundle/bundle.js')
    .pipe(gulp.dest(path.buildAssets))
    .pipe(browserSync.stream())
})

