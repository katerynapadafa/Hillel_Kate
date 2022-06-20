const { series, parallel, src, dest, watch } = require('gulp')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
var browserSync = require('browser-sync').create();

function cleanDist() {
    return src('dist/*', { read: false })
        .pipe(clean())
}

function copyHtml() {
    return src('./public/index.html').pipe(
        dest('./dist')
    )
}

function copyCss() {
    return src('src/**/*.css')
        // .pipe(concat('app.css'))
        .pipe(dest('./dist/css'))

}


function copyJs() {
    return src('src/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'))

}

function copyVendorJs() {
    return src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(concat('vendor.js'))
        .pipe(dest('./dist/js'))

}
const build = parallel(copyHtml, copyCss, copyJs, copyVendorJs)

function serve() {
    series(cleanDist, build);
    watch('src/*.css', copyCss).on('change', browserSync.reload);
    watch('src/**/*.js', copyJs).on('change', browserSync.reload);
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
}

module.exports = {
    build: series(cleanDist, build),
    serve: serve,
}