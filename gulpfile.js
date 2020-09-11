//一、导入模块
let gulp = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');

//发布任务
//css
function fnSass(){
    return gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./bist/css'));
}
//js
function fnJs(){
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./bist/js'));
}
//监听
function fnWatch(){
    gulp.watch('./src/css/*.scss',fnSass);
    gulp.watch('./src/js/*.js',fnJs);
}

//导出任务
exports.sass = fnSass;
exports.js = fnJs;
exports.default = fnWatch;