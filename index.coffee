 jy = require('jellyjs')
 async = require('async')

 jelly = new jy.Jelly()
 jelly.setRootDirectory(__dirname)
 async.series([
        (cb) -> jelly.readJellyConfigurationFile( (err) -> cb(err,null)),
        (cb) -> jelly.readAllGeneralConfigurationFiles( (err) -> cb(err,null))
        (cb) -> jelly.getPluginDirectoryList().readAllPlugins((err) -> cb(err, null))
        (cb) -> jelly.applyPluginsSpecified(true, (err) -> cb(err))
      ], (err, res) ->
        if err?
          console.error("ERROR:", err)
          process.exit(1)     
      )