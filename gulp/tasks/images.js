'use strict';

var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var config     = require('../config').images;
var browserSync  = require('browser-sync');
// var pngquant = require('imagemin-pngquant');
var opt = {
      // optimizationLevel: 5,
      progressive: true,
      interlaced: true
      // use: [pngquant({ quality: '65-80', speed: 4 })]
    };

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin(opt)) // Optimize
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
