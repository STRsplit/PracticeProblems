describe('balancedParens', function() {
  it('The balancedParens function should exist', function() {
    expect(balancedParens).to.be.a('function');
  })
  it('A blank string should return true', function() {
    expect(balancedParens('')).to.equal(true);
  })
  it('A single parenthesis should return false - in either orientation', function() {
    expect(balancedParens(')')).to.equal(false);
    expect(balancedParens('(')).to.equal(false);
  })
  it('It should be able to handle edge case: Integer', function() {
    expect(balancedParens(9)).to.equal(true);
    expect(balancedParens(0)).to.equal(true);
  })
  it('It should be able to handle edge case: odd characters', function() {
    expect(balancedParens('--***')).to.equal(true);
    expect(balancedParens(')-&&#@')).to.equal(false);
  })
  it('It should handle basic parenthesis', function() {
    assert.equal(balancedParens('('), false, 'A single parenthesis should return false');
    assert.equal(balancedParens('()'), true, 'An opening and closing parenthesis should return true');
    assert.equal(balancedParens(')('), false, 'A closing parenthesis coming before an opener should return false');
    assert.equal(balancedParens('(())'), true, 'Two opening parenthesis followed by two closing parenthesis should return true');
  });
  it('It should handle basic brackets', function() {
    assert.equal(balancedParens('['), false, 'A single bracket should return false');
    assert.equal(balancedParens('[]'), true, 'An opening and closing brackets should return true');
    assert.equal(balancedParens(']['), false, 'A closing bracket coming before an opener should return false');
    assert.equal(balancedParens('[[]]'), true, 'Two opening brackets followed by two closing parenthesis should return true');
  });
  it('It should handle basic curly braces', function() {
    assert.equal(balancedParens('{'), false, 'A single curly brace should return false');
    assert.equal(balancedParens('{}'), true, 'An opening and closing curly brace should return true');
    assert.equal(balancedParens('}{'), false, 'A closing curly brace coming before an opener should return false');
    assert.equal(balancedParens('{{}}'), true, 'Two opening curly braces followed by two closing parenthesis should return true');
  });
//Assertions for parenthesis, brackets and curly braces
  it('It should correctly handle mixtures of brackets, parenthesis and curly braces', function() {
    assert.equal(balancedParens('[](){}'), true, 'All openers, followed by their appropriate closers should return true');
    assert.equal(balancedParens('[({})]'), true, 'Closing brackets returned in the correct order should return a value of true');
    assert.equal(balancedParens('[(]{)}'), false, 'If a closing bracket for one opener comes out of order, the function should return false');
  });
//Assertions including non bracket characters
  it('It should ignore other characters and correctly detect balanced brackets, parenthesis and curly braces', function() {
    assert.equal(balancedParens(' var wow  = { yo: thisIsAwesome() }'), true, 'Brackets in the correct sequence should return true regardless of other characters');
    assert.equal(balancedParens(' var hubble = function() { telescopes.awesome();'), false, 'Opening brackets without their closing brackets should return false');
  });
  // it('should return an empty array if passed an empty string', function() {
  //   assert.equal.deepEqual(allAnagrams(''), [], 'An empty string should return an empty array');
  // });
  // it('A single letter string should return a one element array with that string', function() {
  //   assert.equal.deepEqual(allAnagrams('a'), ['a'], 'A single letter string should return the single letter');
  // });

  // it('Input "abc" should return a total of 6 anagrams', function() {
  //   expect(allAnagrams('abc').length).to.equal(6);
  // }); 
  // it('Input "abc" returned array should have "abc" as the first element', function() {
  //   expect(allAnagrams('abc')[0]).to.equal('abc');
  // }); 
  // it('Input "abc" returned array should have "cba" as an element', function() {
  //   expect(allAnagrams('abc').indexOf('cba')).to.not.equal(-1);
  // }); 
  // it('Input "abc" returned array should have "bca" as an element', function() {
  //   expect(allAnagrams('abc').indexOf('bca')).to.not.equal(-1);
  // }); 
  // it('Input "abc" should return all of the same anagrams as "cba"', function() {
  //   let anagramsABC = allAnagrams('abc');
  //   let anagramsCBA = allAnagrams('cba');
  //   expect(_.intersection(anagramsABC, anagramsCBA).length).to.equal(6);
  //   expect(_.difference(anagramsABC, anagramsCBA)).to.deep.equal([]);
  // }); 
  // it('Input string containing only the same letter should return all of the variations even if they are duplicates', function() {
  //   expect(allAnagrams('uuu').length).to.equal(6);
  //   expect(allAnagrams('uu').length).to.equal(2);
  // }); 
});