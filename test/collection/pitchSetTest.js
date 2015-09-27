var vows = require('vows')
var assert = require('assert')
var pitchSet = require('../../lib/collection/pitchSet')

vows.describe('set/pitchSet').addBatch({
  'convert to array of notes': function () {
    assert.deepEqual(pitchSet('C D'), ['C', 'D'])
    assert.deepEqual(pitchSet('c3 D7'), ['C', 'D'])
  },
  'order by frequency': function () {
    assert.deepEqual(pitchSet('D3 Db3 C3 D3'), ['D', 'C', 'Db'])
  },
  'remove duplicates': function () {
    assert.deepEqual(pitchSet('C D E C'), ['C', 'D', 'E'])
  },
  'set tonic': function () {
    assert.deepEqual(pitchSet('G F A G', 'F'), ['F', 'G', 'A'])
  },
  'default tonic': function () {
    assert.deepEqual(pitchSet('c e g a'), ['C', 'E', 'G', 'A'])
    assert.deepEqual(pitchSet('d e f g a b c'), ['D', 'E', 'F', 'G', 'A', 'B', 'C'])
    assert.deepEqual(pitchSet('D3 Db3 C3 D2'), ['D', 'C', 'Db'])
  }
}).export(module)
