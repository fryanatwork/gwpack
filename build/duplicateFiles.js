/*
  gulp duplicate files
  - Author: Fryan
  - Modified: 2018-05-07
*/

gulp = require('gulp')

// images
gulp.task('dp_images', function () {
  // gulp.src(path.srcAssets + 'images/**/*.+(jpg|png|gif|svg)')
  //   .pipe(gulp.dest(path.buildAssets + 'images/'))
  //   .pipe(browserSync.stream())

  // fix gulp src file missing issue
  function getTarget() {
    const fs = require('fs')
    const serachPath = path.srcAssets + 'images/'
    let target = fs.readdirSync(serachPath)
    var targetList = []
    target.forEach( function (ele) {
      if(fs.statSync(serachPath + ele).isDirectory()){
        targetList.push({
          target: serachPath + ele + '/*',
          path: ele + '/'
        })
      }else if(fs.statSync(serachPath + ele).isFile())
        targetList.push({
          target: serachPath + ele,
          path: ''
        })
    })
    return targetList
  }

  getTarget().forEach( function (element) {
    gulp.src(element.target)
      .pipe(gulp.dest(path.buildAssets + 'images/' + element.path))
      .on('finish', function () {
        console.clear()
      })
  })
})

// robot
gulp.task('dp_robot', function () {
  gulp.src(path.src + 'robot.txt')
  .pipe(gulp.dest(path.build))

  gulp.src(path.src+'/favoicon.ico')
  .pipe(gulp.dest(path.build))
})

gulp.task('dp_js', function () {
  gulp.src(path.plugins + 'bundle/bundle.js')
    .pipe(gulp.dest(path.buildAssets))
    .on('finish', function () {
      console.clear()
    })
})

// task
gulp.task('duplicateFiles', [
  'dp_images',
  'dp_robot',
  'dp_js'
], function () {
  console.clear()
})