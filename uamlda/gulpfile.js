'use strict'

var gulp = require('gulp')
var $ = require('gulp-load-plugins')()
var del = require('del')
var prefix = require('gulp-autoprefixer')
var svgmin = require('gulp-svgmin')
var inlineimage = require('gulp-inline-image')

gulp.task('sass', function () {
  gulp.src('./src/scss/*.scss')
    .pipe($.sass())
    .on('error', function (error) {
      console.error(error)
      this.emit('end')
    })
    .pipe(inlineimage())
    .pipe(prefix('last 2 versions'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.minifyCss())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', function () {
  gulp.src([
  'bower_components/bootstrap-sass-official/assets/javascripts/**/*',
  'bower_components/bootstrap-sass-official/assets/javascripts/highlight.pack.js',
  './src/js/*.js'
  ])
    .pipe($.concat('ua-bootstrap.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist/js/'))
})

gulp.task('clean', function (cb) {
  del(['dist/*', 'dist/css'], cb)
})

gulp.task('svg', function () {
  gulp.src('./src/svg/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('./src/img/.'));
})

gulp.task('jade', function () {
  gulp.src('./docs/jade/*.jade')
    .pipe($.jade({
        pretty: true
    }))
    .pipe(gulp.dest('./docs/'))
})

gulp.task('build', ['svg', 'sass', 'js', 'jade' ])

gulp.task('default', ['clean'], function () {
  gulp.start('build')
})

gulp.task('connect', function () {
  $.connect.server({
    port: 8888,
    root: 'docs'
  })
})

gulp.task('watch', function () {

  gulp.watch('src/svg/*', ['svg', 'sass', 'build-docs'])

  gulp.watch('src/scss/*.scss', ['sass', 'build-docs'])

  gulp.watch('src/js/*.js', ['js', 'build-docs'])

  gulp.watch('docs/jade/*/*', ['jade', 'build-docs'])

})

gulp.task('serve', ['connect', 'watch'])

gulp.task('build-docs', function () {
  gulp.src('ua_components/ua-brand-icons/fonts/ua-brand-symbols.*')
    .pipe(gulp.dest('docs/ua-brand-icons/fonts'))
  gulp.src('ua_components/ua-brand-icons/*.css')
    .pipe(gulp.dest('docs/ua-brand-icons'))
  gulp.src('bower_components/highlightjs/*.js')
    .pipe(gulp.dest('docs/js'))
  gulp.src('dist/**/*')
    .pipe(gulp.dest('docs'))
  gulp.src('bower_components/highlightjs/styles/googlecode.css')
    .pipe(gulp.dest('docs/css'))
})
