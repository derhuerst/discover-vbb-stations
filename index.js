'use strict'

const createWalk = require('hafas-discover-stations')
const vbb = require('vbb-hafas')

const walk = createWalk(vbb)

module.exports = walk
