const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass(sassCompiled) {
  src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/css"));
  sassCompiled();
}

exports.default = compileSass;