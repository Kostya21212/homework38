const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Указываем компилятор явно
const browserSync = require('browser-sync').create();

// Компиляция SCSS в CSS
gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

// Запуск сервера и слежение за изменениями
gulp.task('serve', function() {
    browserSync.init({
        server: './'
    });

    gulp.watch('css/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Задача по умолчанию
gulp.task('default', gulp.series('sass', 'serve'));
