describe('commonCharacters', function() {
  it('The commonCharacters function should exist', function() {
    expect(commonCharacters).to.be.a('function');
  })
  it('A blank string should return an empty string', function() {
    expect(commonCharacters('')).to.deep.equal('');
  })
  it('Passing just one string should return an empty string', function() {
    expect(commonCharacters('a')).to.deep.equal('');
    expect(commonCharacters('xxaabbcc')).to.deep.equal('');
  })
  it('Two strings without shared characters should return an empty string', function() {
    expect(commonCharacters('abcd', 'efghi')).to.deep.equal('');
    expect(commonCharacters('xxxxxx', 'yyyyaaaabbbb')).to.deep.equal('');
  })

  it('It should return shared characters between two strings', function() {
    assert.equal(commonCharacters('aaaaaaa', 'bba'), 'a', 'A single shared character should return a string of that character');
    assert.equal(commonCharacters('yyybbaa', 'aaaaby'), 'yba', 'Should return in the order seen in first string');
    assert.equal(commonCharacters('avvbzuvvi', 'tvvuivvwa'), 'avui', 'Resulting string should have all unique characters');
  });
  it('It should handle any number of arguments', function() {
    assert.equal(commonCharacters('aavv', 'a', ''), 'a', 'Even with an empty string, three arguments should produce the correct result');
    assert.equal(commonCharacters('aavv', 'abc', 'vaa'), 'av', 'Three arguments should produce the correct result');
    assert.equal(commonCharacters('aavv', 'abc', 'vaa'), 'av', 'Three arguments should produce the correct result');
    assert.equal(commonCharacters('aavvyui', 'ee', 'va', 'yui'), 'avyui', 'Should handle four strings');
  });
});