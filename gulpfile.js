var gulp = require('gulp')
  , $    = require('gulp-load-plugins')()
  , browserSync = require('browser-sync').create()

gulp.task('jade', function () {
  gulp.src('src/jade/*.jade')
    .pipe($.plumber())
    .pipe($.jade({ pretty: true }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('stylus', function () {
  gulp.src('src/styles/main.styl')
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
})

gulp.task('watch', function () {
  gulp.watch('src/jade/**/*.jade', [ 'jade' ])
  gulp.watch('src/styles/**/*.styl', [ 'stylus' ])
})

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
})

gulp.task('develop', [ 'jade', 'stylus', 'watch', 'serve' ])

gulp.task('default', [ 'develop' ])
