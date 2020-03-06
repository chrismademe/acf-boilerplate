// Config
const config = {
    source: 'assets/sass',
    dest: 'assets/css'
};

// Modules
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassglob = require('gulp-sass-glob');
const minifycss = require('gulp-cssnano');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const postcssLogical = require('postcss-logical');

/**
 * Default Task that runs when you type gulp in the console
 */
const defaultTask = function(done) {
    gulp.series('compileSass', 'watch');
    done();
};

/**
 * Compile SASS
 *
 * Compiles your SASS files in to one stylesheet
 */
const compileSass = function() {
    // Load SASS Files
    return (
        gulp
            .src(`${config.source}/style.scss`)

            // Compile SASS
            .pipe(sassglob())
            .pipe(sass().on('error', sass.logError))
            .pipe(plumber())

            // Autoprefix and Minify
            .pipe(autoprefixer({ cascade: false }))
            .pipe(postcss([postcssLogical()]))
            .pipe(minifycss())

            // Save it and update the browser
            .pipe(gulp.dest(config.dest))
            .pipe(notify({ message: 'Styles task complete' }))
    );
};

function watch(done) {
    // Watch .scss files
    gulp.watch(
        [
            `${config.source}/*.scss`,
            `${config.source}/**/*.scss`,
            `${config.source}/**/**/*.scss`
        ],
        compileSass
    );

    done();
}

const watchAndSync = gulp.parallel(watch);

exports.default = defaultTask;
exports.compileSass = compileSass;
exports.watch = watchAndSync;
