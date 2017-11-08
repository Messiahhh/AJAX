const gulp = require('gulp')
const stylus = require('gulp-stylus')
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync')
const reload = browserSync.reload


gulp.task('stylus', () => {
    gulp.src('static/src/stylus/*')
        .pipe(stylus())
        .pipe(gulp.dest('static/dist/css'))
})


gulp.task('imagemin', () => {
    gulp.src('static/src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('static/dist/image'))
})


gulp.task('watch', () => {
    gulp.watch('static/src/stylus/*', ['stylus'])
})


gulp.task('changed', function () {
    browserSync({
        server: {
            baseDir: "./"
        }
    })

    gulp.watch("static/dist/css/*").on("change", browserSync.reload)
})



gulp.task('default', ['stylus', 'imagemin', 'watch', 'changed'])
