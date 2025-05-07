const { src, dest, series, watch } = require('gulp');
// CSS-related plug-ins
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
// Plugin used to rename files and change their extensions and location
const rename = require('gulp-rename');
// JavaScript-related plug-ins
// const babel = require('gulp-babel');
// const terser = require('gulp-terser');
// Image-related plug-ins
const imagemin = require('gulp-imagemin');
// Sourcemaps
const sourcemaps = require('gulp-sourcemaps');
// BrowserSync & reload
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
// Webpack
const webpack = require('webpack-stream');
// Gulp-if
const gulpIf = require('gulp-if');
// Path
const path = require("path");

const paths = {
  styles: {
    src: "./src/scss/**/*.scss",
    dist: "./docs/css"
  },

  scripts: {
    src: "./src/js/main.js",
    dist: "./docs/js"
  },

  images: {
    src: "./src/images/**/*",
    dist: "./docs/images" 
  },

  html: "./docs/*.html",
  dist: "./docs"
};

function prepareCSS() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", (error) => {
      console.error(`Sass error: ${error}`);
    }))
    .pipe(postcss([
      autoprefixer({
        cascade: false,
        grid: "autoplace",
      }),
      cssnano({
        preset: ['default', {
          discardComments: {
            removeAll: true,
          }
        }]
      })
    ]))
    .pipe(rename({
      basename: 'style',
      suffix: '.min',
      extname: '.css'
    }).on("error", (error) => {
      console.error(`Rename error: ${error}`);
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.styles.dist));
}

function bundleScripts() {
  return src(paths.scripts.src)
    .pipe(webpack({
      mode: "production",
      output: {
        filename: "main.min.js",
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      }
    }).on("error", (error) => {
      console.log(`Webpack error: ${error}`);
    }))
    .pipe(dest(paths.scripts.dist));
}

// function transformScripts() {
//   return src(`${paths.scripts.dist}/main.min.js`)
//     .pipe(sourcemaps.init())
//     .pipe(babel({
//       presets: ['@babel/env'],
//     }).on("error", (error) => {
//       console.error(`Babel error: ${error}`);
//     }))
//     .pipe(terser({
//       toplevel: true
//     }).on("error", (error) => {
//       console.error(`Terser error: ${error}`);
//     }))
//     .pipe(sourcemaps.write("."))
//     .pipe(dest(paths.scripts.dist));
// }

// function prepareScripts(cb) {
//   series(bundleScripts, transformScripts);
//   cb();
// }

function isNotWebp(file) {
  return path.extname(file.path).toLowerCase() !== ".webp";
}

function compressImages() {
  return src(paths.images.src)
    .pipe(gulpIf(
      isNotWebp, 
      imagemin().on("error", (error) => {
        console.error(`Imagemin error: ${error}`)
      })
    ))
    .pipe(gulpIf(
      isNotWebp, 
      rename({suffix: ".min"}).on("error", (error) => {
        console.error(`Rename error: ${error}`)
      })
    ))
    .pipe(dest(paths.images.dist));
}

function startBrowserSync(cb) {
  browserSync.init(
    {
      host: "192.168.1.101",
      port: 3000,
      injectChanges: true,
      server: {
        baseDir: "./docs",
        index: "index.html"
      },
    }
  );
  cb();
}

function watchForChanges() {
  watch(paths.html).on("change", reload);
  watch(paths.styles.src, prepareCSS).on("change", reload);
  watch(paths.scripts.src, bundleScripts).on("change", reload);
  watch(paths.images.src, compressImages).on("change", reload);
}

module.exports.default = series(prepareCSS, bundleScripts, compressImages, startBrowserSync, watchForChanges);
module.exports.prepareCSS = prepareCSS;
module.exports.compressImages = compressImages;
module.exports.startBrowserSync = startBrowserSync;
module.exports.watch = watch;