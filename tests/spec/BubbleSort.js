describe('bubbleSort', function() {
  it('Should return null if passed null', function() {
    assert.deepEqual(bubbleSort(null), null, 'A null value should return null');
  });
  it('Should return an empty array if called with an empty array', function() {
    assert.deepEqual(bubbleSort([]), [], 'An empty array should return an empty array.');
  });

  it('Should return a single item array when passed an array with just one element', function() {
    assert.deepEqual(bubbleSort([5]), [5], 'An array of just one value returns array as is.');
  });

  it('If the smallest element is at the end of the array, the function should iterate through all values', function() {
    bubbleSort([4, 1, 0, -1, 2, 3, 4, 5, 3, 5, 8, 2, -10]);
    expect(i).to.eql(-1);
  });

  it('If array is in order, should only iterate through array one time', function() {
    bubbleSort([1, 2, 3, 4]);
    expect(i).to.eql(2);
  }); 

  it('If array elements are all same values, should only iterate through array one time', function() {
    bubbleSort([1, 1, 1, 1]);
    expect(i).to.eql(2);
  }); 

  it('If array elements are in order, swap should be flagged as false', function() {
    bubbleSort([1, 2, 3, 4]);
    expect(swap).to.eql(false);
  });

  it('If array elements are in order after the 1st iteration, the function should iterate through the array just one more time', function() {
    bubbleSort([2, 1, 3, 4, 5, 6, 7]);
    expect(i).to.eql(4);
  });
  it('If only one element, the iterations should be 0 and return -1', function() {
    bubbleSort([2]);
    expect(i).to.eql(-1);
  });
});
