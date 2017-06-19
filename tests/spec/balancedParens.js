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

});