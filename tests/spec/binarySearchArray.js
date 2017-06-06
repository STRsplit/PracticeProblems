describe('binarySearch', function() {

  it('Should return null if passed null', function() {
    assert.deepEqual(binarySearch([1, 2, 3, 4], null), null, 'A null value should return null');
  });
  it('Should return null if called with an empty array', function() {
    assert.deepEqual(binarySearch([], 5), null, 'An empty array should return null.');
  });

  it('Should not classify 0 as falsey value, return index of 0 in array', function() {
    assert.deepEqual(binarySearch([0, 2, 3, 4], 0), 0, 'Target of 0 should not be considered falsey value');
  });

  it('If target element at middle of array, function should only run one time', function() {
    binarySearch([10, 20, 30, 40, 50], 30);
    expect(counter).to.eql(1);
  });

  it('Should return index for target matching any position in array', function() {
    assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 1), 0, 'Target of 1 returns index 0');
    assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 3), 1, 'Target of 1 returns index 0');
    assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 5), 2, 'Target of 1 returns index 0');
    assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 7), 3, 'Target of 1 returns index 0');
    assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 9), 4, 'Target of 1 returns index 0');
  }); 

  it('If target not in array, should return null', function() {
    assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 11), null, 'Should return null');
    assert.deepEqual(binarySearch([1, 3, 5, 7, 9], -3), null, 'Should return null');
  }); 

  it('In the case of an array "[1, 2, 4, 5, 6, 10]" with target 10 counter should be 3', function() {
    binarySearch([1, 2, 4, 5, 6, 10], 10);
    expect(counter).to.eql(3);
  }); 

  it('In the case of an array "[1, 2, 4, 5, 6, 10]" with target 2 counter should be 3', function() {
    binarySearch([1, 2, 4, 5, 6, 10], 2);
    expect(counter).to.eql(3);
  }); 

  it('Array of one element should be counter 1', function() {
    binarySearch([5], 5);
    expect(counter).to.eql(1);
  });

});
