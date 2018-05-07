/*
  gulp webserver
  - Version: 1.0.1-alpha.1
  - Author: Fryan
  - Modified: 2018-05-07
*/

// task
gulp.task('webserver', function() {
  browserSync({
    open: serverSettings.open,
    files: [path.build],
    port: serverSettings.port,
    server: {
      baseDir: path.build
    }
  });
});
