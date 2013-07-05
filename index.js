// Generated by CoffeeScript 1.6.2
var async, jelly, jy;

jy = require('jellyjs');

async = require('async');

jelly = new jy.Jelly();

jelly.setRootDirectory(__dirname);

async.series([
  function(cb) {
    return jelly.readJellyConfigurationFile(function(err) {
      return cb(err, null);
    });
  }, function(cb) {
    return jelly.readAllGeneralConfigurationFiles(function(err) {
      return cb(err, null);
    });
  }, function(cb) {
    return jelly.getPluginDirectoryList().readAllPlugins(function(err) {
      return cb(err, null);
    });
  }, function(cb) {
    return jelly.applyPluginsSpecified(true, function(err) {
      return cb(err);
    });
  }
], function(err, res) {
  if (err != null) {
    console.error("ERROR:", err);
    return process.exit(1);
  }
});