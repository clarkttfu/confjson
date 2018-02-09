const should = require('should')
const config = require('../index.js')({
  a: 11,
  d: [
    { e: [ undefined, 8 ] }
  ],
  f: {
    g: [ 9 ]
  }
})

describe('override values in test cases', () => {
  it('return overriden and default values', () => {
    should(config.a).equal(11)
    should(config.d[0].e[0]).be.null()
    should(config.d[0].e[1]).equal(8)
    should(config.f.g[0]).equal(9)
  })
})
