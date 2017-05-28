describe('insertionSort', function() {
  it('should return null if passed null', function() {
    assert.deepEqual(insertionSort(null), null, 'A null value should return null');
  });
  it('A single letter string should return a one element array with that string', function() {
    assert.deepEqual(insertionSort('a'), ['a'], 'A single letter string should return the single letter');
  });

  it('Input "abc" should return a total of 6 anagrams', function() {
    expect(insertionSort('abc').length).to.equal(6);
  }); 
  it('Input "abc" returned array should have "abc" as the first element', function() {
    expect(insertionSort('abc')[0]).to.equal('abc');
  }); 
  it('Input "abc" returned array should have "cba" as an element', function() {
    expect(insertionSort('abc').indexOf('cba')).to.not.equal(-1);
  }); 
  it('Input "abc" returned array should have "bca" as an element', function() {
    expect(insertionSort('abc').indexOf('bca')).to.not.equal(-1);
  }); 
  it('Input "abc" should return all of the same anagrams as "cba"', function() {
    let anagramsABC = insertionSort('abc');
    let anagramsCBA = insertionSort('cba');
    expect(_.intersection(anagramsABC, anagramsCBA).length).to.equal(6);
    expect(_.difference(anagramsABC, anagramsCBA)).to.deep.equal([]);
  }); 
  it('Input string containing only the same letter should return all of the variations even if they are duplicates', function() {
    expect(insertionSort('uuu').length).to.equal(6);
    expect(insertionSort('uu').length).to.equal(2);
  }); 
});