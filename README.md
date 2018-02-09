confjson
====

1. In your app entrypoint, set defaults and load from file and create the file with defaults if not found.

```
const config = require('confjson')({
  k1: [ 'hello' ]
}, 'config/config.json')
```

2. In app sub modules, call `confjson` with nothing to get config

```
const config = require('confjson')()
...
```

3. In test cases, alter the (global) config to make conditions 

```
const config = require('confjson)({
  k1: 'world',
  k2: []
})
```
