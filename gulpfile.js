const { src, dest, series } = require('gulp');
// CSS-related plug-ins
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
// Plugin used to rename files and change their extensions and location
const rename = require('gulp-rename');
// JavaScript-related plug-ins
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
// Image-related plug-ins
const imagemin = require('gulp-imagemin');
// Sourcemaps
const sourcemaps = require('gulp-sourcemaps');

const paths = {
  sassSrc: "./src/scss/**/*.scss",
  cssDist: "./dist/css",
  jsSrc: "./src/js/**/*.js",
  jsDist: "./dist/js",
  imgSrc: "./src/images/**/*",
  imgDist: "./dist/images"
}

function prepareCSS(CSSReady) {
  src(paths.sassSrc)
    .pipe(sourcemaps.init())
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
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.cssDist));
  CSSReady();
}

function transformJS(JSReady) {
  src(paths.jsSrc)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({
      basename: "main",
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.jsDist));
  JSReady();
}

function compressImages(imagesReady) {
  src(paths.imgSrc)
    .pipe(imagemin())
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(dest(paths.imgDist));
  imagesReady();
}

exports.default = series(prepareCSS, transformJS, compressImages);