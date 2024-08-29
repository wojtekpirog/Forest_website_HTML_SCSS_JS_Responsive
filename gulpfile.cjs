const { src, dest, series, parallel, watch } = require('gulp');
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
// Gulp-clean
const clean = require('gulp-clean');
// Kit
const kit = require('gulp-kit');
// Sourcemaps
const sourcemaps = require('gulp-sourcemaps');
// BrowserSync & reload
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const paths = {
  styles: {
    src: "./src/scss/**/*.scss",
    dist: "./dist/css"
  },

  scripts: {
    src: "./src/js/**/*.js",
    dist: "./dist/js"
  },

  images: {
    src: "./src/images/**/*",
    dist: "./dist/images" 
  },

  html: "./html/**/*.kit",
  dist: "./dist"
};

function prepareCSS() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", (error) => {
      console.error(`Sass error: ${error}`);
      this.emit("end");
    }))
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(rename({
      basename: 'style',
      suffix: '.min',
      extname: '.css'
    }).on("error", (error) => {
      console.error(`Rename error: ${error}`);
      this.emit("end");
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.styles.dist));
}

function transformJS() {
  return src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }).on("error", (error) => {
      console.error(`Babel error: ${error}`);
      this.emit("end");
    }))
    .pipe(uglify().on("error", (error) => {
      console.error(`Uglify error: ${error}`);
      this.emit("end");
    }))
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }).on("error", (error) => {
      console.error(`Rename error: ${error}`);
      this.emit("end");
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.scripts.dist));
}

function compressImages() {
  return src(paths.images.src)
    .pipe(imagemin().on("error", (error) => {
      console.error(`Imagemin error: ${error}`);
      this.emit("end");
    }))
    .pipe(rename({
      suffix: '.min',
    }).on("error", (error) => {
      console.error(`Rename error: ${error}`);
      this.emit("end");
    }))
    .pipe(dest(paths.images.dist));
}

function cleanUnncessaryFiles(done) {
  src(paths.dist, { read: false })
    .pipe(clean());
  done();
}

function startBrowserSync(callback) {
  browserSync.init(
    {
      injectChanges: true,
      server: {
        // Ścieżka do katalogu, w którym będzie uruchamiany serwer
        baseDir: "./dist"
      },
    }
  );

  callback();
}

function watchForChanges() {
  watch("./dist/*.html").on("change", reload);
  // watch([paths.styles.src, paths.scripts.src], series(prepareCSS, transformJS)).on("change", reload);
  watch(paths.styles.src, prepareCSS).on("change", reload);
  watch(paths.scripts.src, transformJS).on("change", reload);
  watch(paths.images.src, compressImages).on("change", reload);
}

const optimizeFiles = series(prepareCSS, transformJS, compressImages);
module.exports.default = series(optimizeFiles, startBrowserSync, watchForChanges);
module.exports.cleanUnncessaryFiles = cleanUnncessaryFiles;
module.exports.startBrowserSync = startBrowserSync;
module.exports.watch = watch;