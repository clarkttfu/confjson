confjson
====

## Get started

### Set defaults at app entrypoint

Values loaded from config.json will override defaults or the file will be created if not found.

```
const config = require('confjson')({
  k1: [ 'hello' ]
}, 'config/config.json')
```

### Get settings in app sub modules

```
const config = require('confjson')()
```

### Override settings in test cases

Alter the (global) config to make test conditions 

```
const config = require('confjson)({
  k1: 'world',
  k2: []
})
```
