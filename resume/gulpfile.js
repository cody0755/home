(function() {
  var cache, coffee, concat, csslint, csslintChannel, flatten, gulp, gulpif, gutil, imagemin, insert, isDeploy, jade, jadeInheritance, lazypipe, mainSass, minifyCSS, minifyHTML, newer, notify, paths, plumber, rename, rimraf, runSequence, sass, scsslint, sourcemaps, uglify, watch, wrap;
  gulp = require("gulp");
  jade = require("gulp-jade");
  gutil = require("gulp-util");
  coffee = require("gulp-coffee");
  concat = require("gulp-concat");
  uglify = require("gulp-uglify");
  plumber = require("gulp-plumber");
  wrap = require("gulp-wrap");
  rename = require("gulp-rename");
  flatten = require('gulp-flatten');
  gulpif = require('gulp-if');
  minifyHTML = require("gulp-minify-html");
  sass = require("gulp-ruby-sass");
  csslint = require("gulp-csslint");
  minifyCSS = require("gulp-minify-css");
  watch = require("gulp-watch");
  notify = require("gulp-notify");
  scsslint = require("gulp-scss-lint");
  newer = require("gulp-newer");
  cache = require("gulp-cached");
  jadeInheritance = require('gulp-jade-inheritance');
  sourcemaps = require('gulp-sourcemaps');
  insert = require("gulp-insert");
  runSequence = require('run-sequence');
  lazypipe = require('lazypipe');
  rimraf = require('rimraf');
  imagemin = require('gulp-imagemin');
  paths = {};
  paths.app = "";
  paths.dist = "assets/";
  paths.js =[paths.app + "js/jquery.min.js", paths.app + "js/parsley.min.js",paths.app+ "js/jquery.backstretch.min.js", 
             paths.app + "js/jquery.cycle2.min.js",paths.app + "js/jquery.cycle2.swipe.min.js", 
             paths.app + "js/jquery.tooltipster.min.js",paths.app + "js/jquery.mixitup.min.js",paths.app + "js/jquery.magnific-popup.min.js", 
             paths.app + "js/jquery.placeholder.min.js",paths.app + "js/scripts.js", 
             paths.app + "js/wxshare.js"];//paths.app + "js/*.js";
  
  paths.css =[paths.app + "css/font-css.css", paths.app + "css/icons.css",paths.app + "css/normalize.css",paths.app + "css/skin-gold.css"];
  isDeploy = true;//process.argv[process.argv.length - 1] === 'deploy';

  gulp.task("css-vendor", function() {
    return gulp.src(paths.css).pipe(concat("vendor.css")).pipe(gulpif(isDeploy, minifyCSS({
      noAdvanced: true
    }))).pipe(gulp.dest(paths.dist));
  });
  
  gulp.task("js-vendor", function() {
     return gulp.src(paths.js).pipe(plumber()).pipe(concat("libs.js")).pipe(uglify({      mangle: false,      preserveComments: false    })).pipe(gulp.dest(paths.dist));
     //.pipe(uglify({      mangle: false,      preserveComments: false    }))
  });

  gulp.task("styles-watch", ["css-app", "css-vendor"], function() {
    var _paths;
    _paths = [paths.tmp + "vendor.css", paths.tmp + "app.css"];
    return gulp.src(_paths).pipe(concat("main.css")).pipe(gulpif(isDeploy, minifyCSS({
      noAdvanced: true
    }))).pipe(gulp.dest(paths.dist + "styles/"));
  });
  
  gulp.task("jslibs-watch", function() {
    return gulp.src(paths.js).pipe(plumber()).pipe(concat("libs.js")).pipe(gulp.dest(paths.dist));
  });
  
  gulp.task("jslibs-deploy", function() {
    return gulp.src(paths.js).pipe(plumber()).pipe(sourcemaps.init()).pipe(concat("libs.js")).pipe(uglify({
      mangle: false,
      preserveComments: false
    })).pipe(sourcemaps.write('./')).pipe(gulp.dest(paths.dist));
  });
  
  gulp.task("copy-cssfont", function() {
    return gulp.src("" + paths.app + "css/*.woff").pipe(gulp.dest("" + paths.dist + "/"));
  });

  gulp.task("copy-svg", function() {
    return gulp.src("" + paths.app + "img/**/*").pipe(gulp.dest("" + paths.dist + "/img/"));
  });
  
  gulp.task("copy-fonts", function() {
    return gulp.src("" + paths.app + "fonts/*").pipe(gulp.dest("" + paths.dist + "/fonts/"));
  });

  gulp.task("default", ["copy-cssfont", "css-vendor", "js-vendor"]);
}).call(this);