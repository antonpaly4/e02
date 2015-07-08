'use strict';

var gulp = require('gulp')
  , gutil = require('gulp-util')
  , stylus = require('gulp-stylus')
  , nib = require('nib')
  , prefixer = require('gulp-autoprefixer')
  , csso = require('gulp-csso')
  , concat = require('gulp-concat')
  , webpack = require('webpack')
  , webpackConfig = require('./webpack.config');

gulp.task('default', ['stylus', 'webpack'], function () {
    gulp.watch('./src/stylus/**/*.styl', ['stylus']);
    gulp.watch('./src/js/**/*.*', ['webpack']);
});

gulp.task('stylus', function(){
    gulp.src('./src/stylus/*.styl')
      .pipe(stylus({
          use: nib()
      }))
      .on('error', gutil.log)
      .pipe(prefixer([
          'Chrome >= 34',
          'Firefox >= 28',
          'Explorer >= 9']))
      .pipe(csso())
      .pipe(gulp.dest('./public/css'));
});

gulp.task('webpack', function(){
    webpackConfig.plugins = webpackConfig.plugins.concat();

    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);

        gutil.log('webpack', stats.toString({ colors: true }));
    });
});