const { src, dest } = require('gulp');
// CSS-related plug-ins
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
// Plugin used to rename files and change their extensions and location
const rename = require('gulp-rename');

function prepareCSS(CSSReady) {
  src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(rename({
      basename: 'style',
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(dest("./dist/css"));
  CSSReady();
}

exports.default = prepareCSS;