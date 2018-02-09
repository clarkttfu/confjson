const fs = require('fs')
const path = require('path')
const should = require('should')

var config = require('../index.js')({
  a: 1,
  b: {
    c: '3'
  },
  d: [
    { e: [ false ] }
  ]
}, path.join(__dirname, 'config.json'))

describe('init configurations', () => {

  it('load config file', () => {
    should(config.a).equal(1)
    should(config.b.c).equal('3')
    should(config.d[0].e[0]).be.null()
    should(config.d[0].e[1]).equal(5)
    should(config.f.g[0]).equal('7')
  })

})
