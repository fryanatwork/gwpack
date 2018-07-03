/*
  using gulp to make webpack handle plugin, javascript, jquery
  - Author: Fryan
  - Modified: 2018-05-07
*/

const webpack = require('webpack')
const gulpWebpack = require('webpack-stream')

// workflow
gulp.task('webpack', function () {
  gulp.src(path.plugins + 'main.js')
    .pipe(gulpWebpack(
      require('../webpack.config.js'), webpack)
    )
    .pipe(gulp.dest('./plugins/bundle/'))
    .on('finish', function () {
      // console.clear()
    })
})

// task
gulp.task('javascript', [
  'webpack'
], function () {
  // console.clear()
})