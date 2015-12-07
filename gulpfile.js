var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn");

//run local server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});

//html's task
gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//js's task
gulp.task('js', function() {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

//css's task
gulp.task('css', function() {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

//watcher
gulp.task('watch', function() {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/js/*.js'], ['js']);
  gulp.watch(['./app/css/*.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);
