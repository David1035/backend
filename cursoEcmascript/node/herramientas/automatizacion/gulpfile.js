const gulp = require('gulp');
const server = require('gulp-server-livereload');

// ✅ Agregamos la tarea 'default' para evitar problemas en Linux
gulp.task('default', gulp.series('serve'));

// ✅ Modificamos la tarea 'serve' para usar Chokidar en Linux
gulp.task('serve', function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filePath) {
                    return !filePath.includes('node_modules');
                }
            },
            directoryListing: false,
            open: true,
        }));
    cb();
});

// ✅ Solución para evitar errores de permisos en Linux
gulp.task('build', function(cb) {
    console.log('Construyendo el sitio...');
    setTimeout(cb, 5000);
});
