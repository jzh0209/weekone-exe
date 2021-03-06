var gulp = require('gulp');

var sass = require('gulp-sass');

var server = require('gulp-webserver');

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8686,
        }))
})

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'))
})

gulp.task('dev', gulp.series('sass', 'server', 'watch'))

//压缩js
gulp.task('bUglify', function() {
    return gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
})