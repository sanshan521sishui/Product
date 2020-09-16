//一、导入模块
let gulp = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let image = require('gulp-image');

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
//image
function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(image())
        .pipe(gulp.dest('./bist/img'));
}
//复制监听HTML
function fnCopyhtml(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./bist'));
}
function fnCopy(){
    return gulp.src('./src/package/*.html')
        .pipe(gulp.dest('./bist/package'));
}
//监听
function fnWatch(){
    gulp.watch('./src/css/*.scss',fnSass);
    gulp.watch('./src/js/*.js',fnJs);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/index.html',fnCopyhtml);
    gulp.watch('./src/package/*.html',fnCopy);
}

//导出任务
exports.sass = fnSass;
exports.js = fnJs;
exports.img = fnImg;
exports.html = fnCopyhtml;
exports.copy = fnCopy;
exports.default = fnWatch;