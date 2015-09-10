var vows = require('vows')
var assert = require('assert')
var chord = require('../../lib/chord/chord')

vows.describe('chord/chord').addBatch({
  'chord intervals': function () {
    assert.deepEqual(chord('Cm7b5'), ['C4', 'Eb4', 'Gb4', 'Bb4'])
  },
  'chord notes': function () {
    assert.deepEqual(chord('C#maj7'), ['C#4', 'E#4', 'G#4', 'B#4'])
  }
}).export(module)