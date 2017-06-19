describe('characterFrequency', function() {
  it('The characterFrequency function should exist', function() {
    expect(characterFrequency).to.be.a('function');
  })
  it('A blank string should return an empty array', function() {
    expect(characterFrequency('')).to.deep.equal([]);
  })
  it('A single letter should return an array of one tuple', function() {
    expect(characterFrequency('a')).to.deep.equal([['a', 1]]);
    expect(characterFrequency('x')).to.deep.equal([['x', 1]]);
  })
  it('It should be able to handle edge case string with integers', function() {
    expect(characterFrequency('922')).to.deep.equal([['2', 2], ['9', 1]]);
    expect(characterFrequency('1122')).to.deep.equal([['1', 2], ['2', 2]]);
  })

  it('It should handle string of all same letters', function() {
    assert.deepEqual(characterFrequency('aaaaaaa'), [['a', 7]], 'A single character should return frequency in array');
    assert.deepEqual(characterFrequency('yyy'), [['y', 3]], 'A single character should return frequency in array');
    assert.equal(characterFrequency('uuuu').length, 1, 'Results array should only have a single array inside');
  });
  it('It should handle multiple letters same frequency', function() {
    assert.equal(characterFrequency('aavv').length, 2, 'Two letters same frequency should return two arrays inside results array');
    assert.equal(characterFrequency('aavv')[0][1], 2, 'Should provide correct frequency');
    assert.deepEqual(characterFrequency('aavv')[0], ['a', 2], 'First array in results should have character that comes first in alphabetical order');
    assert.deepEqual(characterFrequency('vvaa'), [['a', 2], ['v', 2]], 'Should return results in alphabetical order regardless of order in string');
  });
  it('It should handle alternating character strings correctly', function() {
    assert.deepEqual(characterFrequency('abaccaabb'), [['a', 4], ['b', 3], ['c', 2]], 'Return correct frequency even if alternating characters');
    assert.deepEqual(characterFrequency('abbacccaabbbc'), [['b', 5], ['a', 4], ['c', 4]], 'Highest frequency should come first');
    assert.deepEqual(characterFrequency('abbacccaacbbbc'), [['b', 5], ['c', 5], ['a', 4]], 'Sort by highest frequency then by alphabetical order');
  });
});