const should = require('should')
const config = require('../index.js')()

describe('sub modules', () => {
  it('get preconfiged values', () => {
    should(config.a).equal(1)
    should(config.b.c).equal('3')
    should(config.d[0].e[0]).be.null()
    should(config.d[0].e[1]).equal(5)
    should(config.f.g[0]).equal('7')
  })
})
