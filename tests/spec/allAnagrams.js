describe('allAnagrams', function() {
  it('should return an empty array if passed an empty string', function() {
    assert.deepEqual(allAnagrams(''), [], 'An empty string should return an empty array');
  });
  it('A single letter string should return a one element array with that string', function() {
    assert.deepEqual(allAnagrams('a'), ['a'], 'A single letter string should return the single letter');
  });

  it('Input "abc" should return a total of 6 anagrams', function() {
    expect(allAnagrams('abc').length).to.equal(6);
  }); 
  it('Input "abc" returned array should have "abc" as the first element', function() {
    expect(allAnagrams('abc')[0]).to.equal('abc');
  }); 
  it('Input "abc" returned array should have "cba" as an element', function() {
    expect(allAnagrams('abc').indexOf('cba')).to.not.equal(-1);
  }); 
  it('Input "abc" returned array should have "bca" as an element', function() {
    expect(allAnagrams('abc').indexOf('bca')).to.not.equal(-1);
  }); 
  it('Input "abc" should return all of the same anagrams as "cba"', function() {
    let anagramsABC = allAnagrams('abc');
    let anagramsCBA = allAnagrams('cba');
    expect(_.intersection(anagramsABC, anagramsCBA).length).to.equal(6);
    expect(_.difference(anagramsABC, anagramsCBA)).to.deep.equal([]);
  }); 
  it('Input string containing only the same letter should return all of the variations even if they are duplicates', function() {
    expect(allAnagrams('uuu').length).to.equal(6);
    expect(allAnagrams('uu').length).to.equal(2);
  }); 
});