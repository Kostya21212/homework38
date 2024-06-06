const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError)) // Додано обробник помилок Sass
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('js.js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: './'
    });

    gulp.watch('css/*.scss', gulp.series('sass'));
    gulp.watch('js.js/*.js', gulp.series('scripts'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('images', async function() {
    const imagemin = await import('gulp-imagemin');
    return gulp.src(['images/*', 'js.js/*', '*.html'])
        .pipe(imagemin.default())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'serve', 'images'));
