/*
  gulp html beautify
  - Author: Fryan
  - Modified: 2018-05-07
*/

const htmlbeautify = require('gulp-html-beautify')
// task
gulp.task('beautify', function () {
  const options = {
    "indent_size": 2,
    "indent_char": "  ",
    "indent_level": 0,
    "indent_with_tabs": true,
    "preserve_newlines": true,
    "end_with_newline": true,
    "wrap_attributes_indent_size": 1
  }
  gulp.src(path.build + '**/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest(path.build))
});