/*
  gulpfile setting
  - Author: Fryan
  - Modified: 2018-05-07
*/

gulp = require('gulp')
browserSync = require('browser-sync')

const requireDir = require('require-dir')

const path = require('./config/path.js')
const fileIncludeReplactment = require('./config/variable.js')
const serverSettings = require('./config/serverSettings.js')

var dir = requireDir('./build/')