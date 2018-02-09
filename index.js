const fs = require('fs')
const path = require('path')
const _ = require('lodash')

function loadFileSync (file, defaults) {
  var filepath = path.isAbsolute(file) ? file : path.join(path.dirname(module.parent.filename), file)
  try {
    return _.defaultsDeep(require(filepath), defaults || {})
  } catch(err) {
    if (defaults && err && err.code == 'MODULE_NOT_FOUND') {
      fs.writeFileSync(filepath, JSON.stringify(defaults, null, '  '))
      return _.cloneDeep(defaults)
    }
    throw err
  }
}

var CONFIG

module.exports = function (settings, file) {
  if (CONFIG === undefined) { // init call
    return CONFIG = loadFileSync(file, settings)
  } else if (settings === undefined && file === undefined) {
    return CONFIG
  } else if (_.isPlainObject(settings)) {
    return CONFIG = _.defaultsDeep(settings, CONFIG)
  }
}
