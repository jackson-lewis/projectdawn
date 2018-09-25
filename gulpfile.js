//  ////  ////  --  --|    GULPFILE



var gulp            = require( 'gulp' ),

    postcss         = require( 'gulp-postcss' ),
    sass            = require( 'gulp-sass' ),
    autoprefixer    = require( 'autoprefixer' ),

    babel           = require( 'gulp-babel' ),

    browserSync     = require( 'browser-sync' ).create();


// SASSY GOODNESS
gulp.task( 'sass', function () {

    var processors = [ autoprefixer ];

    return gulp.src( 'build/scss/style.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( postcss( processors ) )
        .pipe( gulp.dest( 'prod/css' ) )
        .pipe( browserSync.reload({
            stream: true
        }))
});


//  JS BABEL
gulp.task( 'babel', () =>
    gulp.src( 'build/js/script.js' )
        .pipe( babel ({
            presets: [ 'env' ]
        }))
        .pipe( gulp.dest( 'prod/js' ) )
);


// ALWAYS WATCHIN
gulp.task( 'watch', [ 'reload', 'sass', 'babel' ], function(){
    gulp.watch( 'build/scss/**/*.scss', [ 'sass' ] )
    gulp.watch( 'build/js/*.js', [ 'babel', browserSync.reload ] )
    gulp.watch( 'prod/**/*.php' ).on( 'change', browserSync.reload );
})


// LINK BROWSERSYNC TO MAMP
gulp.task( 'reload', function() {
    browserSync.init({
        proxy: 'http://localhost/dev/projectdawn/prod/',
        port: 8080
    });
});