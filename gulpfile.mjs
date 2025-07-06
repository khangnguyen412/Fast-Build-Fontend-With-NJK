import gulp from 'gulp';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import nunjucksRender from 'gulp-nunjucks-render';
import { deleteAsync as del } from 'del';

// Khởi tạo gulp-sass với engine là Dart Sass
const sassCompiler = gulpSass(sass);

function library() {
    return gulp.src(['./src/lib/**/*'])
        .pipe(gulp.dest('templates/lib'));
}


function styles() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./templates/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./templates/js'))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./templates/images'));
}

function views() {
    return gulp.src([ 'src/views/*.njk', '!src/views/layouts/*.njk', '!src/views/partials/*.njk' ])
        .pipe(nunjucksRender({ path: ['src/views/'] }))
        .pipe(gulp.dest('templates'));

}

function watch() {
    browserSync.init({
        server: {
            baseDir: './templates'
        }
    });
    gulp.watch('./src/scss/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
    gulp.watch('./src/views/**/*.njk', views).on('change', browserSync.reload);
}

function clean() {
    return del(['templates/**/*', '!templates/images', '!templates/images/**/*']);
}

export default gulp.series(clean, gulp.parallel(library, styles, scripts, images, views), watch);