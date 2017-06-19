describe('balancedParensAlt', function() {
  it('The balancedParensAlt function should exist', function() {
    expect(balancedParensAlt).to.be.a('function');
  })
  it('A blank string should return true', function() {
    expect(balancedParensAlt('')).to.equal(true);
  })
  it('A single parenthesis should return false - in either orientation', function() {
    expect(balancedParensAlt(')')).to.equal(false);
    expect(balancedParensAlt('(')).to.equal(false);
  })
  it('It should be able to handle edge case: Integer', function() {
    expect(balancedParensAlt(9)).to.equal(true);
    expect(balancedParensAlt(0)).to.equal(true);
  })
  it('It should be able to handle edge case: odd characters', function() {
    expect(balancedParensAlt('--***')).to.equal(true);
    expect(balancedParensAlt(')-&&#@')).to.equal(false);
  })
  it('It should handle basic parenthesis', function() {
    assert.equal(balancedParensAlt('('), false, 'A single parenthesis should return false');
    assert.equal(balancedParensAlt('()'), true, 'An opening and closing parenthesis should return true');
    assert.equal(balancedParensAlt(')('), false, 'A closing parenthesis coming before an opener should return false');
    assert.equal(balancedParensAlt('(())'), true, 'Two opening parenthesis followed by two closing parenthesis should return true');
  });
  it('It should handle basic brackets', function() {
    assert.equal(balancedParensAlt('['), false, 'A single bracket should return false');
    assert.equal(balancedParensAlt('[]'), true, 'An opening and closing brackets should return true');
    assert.equal(balancedParensAlt(']['), false, 'A closing bracket coming before an opener should return false');
    assert.equal(balancedParensAlt('[[]]'), true, 'Two opening brackets followed by two closing parenthesis should return true');
  });
  it('It should handle basic curly braces', function() {
    assert.equal(balancedParensAlt('{'), false, 'A single curly brace should return false');
    assert.equal(balancedParensAlt('{}'), true, 'An opening and closing curly brace should return true');
    assert.equal(balancedParensAlt('}{'), false, 'A closing curly brace coming before an opener should return false');
    assert.equal(balancedParensAlt('{{}}'), true, 'Two opening curly braces followed by two closing parenthesis should return true');
  });
//Assertions for parenthesis, brackets and curly braces
  it('It should correctly handle mixtures of brackets, parenthesis and curly braces', function() {
    assert.equal(balancedParensAlt('[](){}'), true, 'All openers, followed by their appropriate closers should return true');
    assert.equal(balancedParensAlt('[({})]'), true, 'Closing brackets returned in the correct order should return a value of true');
    assert.equal(balancedParensAlt('[(]{)}'), false, 'If a closing bracket for one opener comes out of order, the function should return false');
  });
//Assertions including non bracket characters
  it('It should ignore other characters and correctly detect balanced brackets, parenthesis and curly braces', function() {
    assert.equal(balancedParensAlt(' var wow  = { yo: thisIsAwesome() }'), true, 'Brackets in the correct sequence should return true regardless of other characters');
    assert.equal(balancedParensAlt(' var hubble = function() { telescopes.awesome();'), false, 'Opening brackets without their closing brackets should return false');
  });

});