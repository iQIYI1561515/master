var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function (){
    gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/jj.css/'))
})
gulp.task('listen',function (){
    gulp.watch('./sass/*.scss',['sass'])
});

