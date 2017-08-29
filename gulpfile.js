var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', ['tsc']);
gulp.task('dev', ['default', 'watch']);
gulp.task('tsc', ['tsc-compile']);


gulp.task('tsc-compile', function () {
    return gulp.src('src/**/*.ts').pipe(ts({ noImplicitAny: true, })).pipe(gulp.dest('dist/'));
});

//Watch for file changes
gulp.task('watch', function () {

    var tsWatcher = gulp.watch('src/**/*.{ts,js}', ['tsc']);
    tsWatcher.on('change', function (event) { console.log('File ' + event.path + ' was ' + event.type + ', running tsc...'); });

});

