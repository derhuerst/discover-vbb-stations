'use strict'

const createWalk = require('hafas-discover-stations')
const createHafas = require('vbb-hafas')

const hafas = createHafas('discover-vbb-stations')
const walk = createWalk(hafas)

module.exports = walk
