const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');

const server = browserSync.create();

const paths = {
    less: 'src/**/**/**/**/*.less'
};

const scripts = () => gulp.src(paths.less, { sourcemaps: true })
    .pipe(concat('style.css'))
    .pipe(less())
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());

const serve = (done) => {
    server.init({
        server: {
            baseDir: './public'
        }
    });
    done();
};

const reload = (done) => {
    server.reload();
    done();
};

const watch = () => gulp.watch(paths.less, gulp.series(scripts, reload));

const dev = gulp.series(scripts, serve, watch);

exports.default = dev;