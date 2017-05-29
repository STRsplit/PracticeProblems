describe('insertionSort', function() {
  it('should return null if passed null', function() {
    assert.deepEqual(insertionSort(null), null, 'A null value should return null');
  });
  it('Should return an empty array if called with an empty array', function() {
    assert.deepEqual(insertionSort([]), [], 'An empty array should return an empty array.');
  });

  it('Should return a single item array when passed an array with just one element', function() {
    assert.deepEqual(insertionSort(testingTransform([5])).map(v => v.value), [5], 'An empty array should return an empty array.');
  });

  it('Should sort an array of objects by value', function() {
    expect(insertionSort([{value: 22}, {value: 3}, {value: 6}])).to.eql([{value: 3}, {value: 6}, {value: 22}]);
  });
  it('Should sort array but not switch elements with equal values', function() {
    expect(insertionSort([{value: 22, ind: 0}, {value: 3, ind: 1}, {value: 3, ind: 2}, {value: 6, ind: 3}])).to.eql([{value: 3, ind: 1}, {value: 3, ind: 2}, {value: 6, ind: 3}, {value: 22, ind: 0}]);
  }); 
  it('An array of all the same values should not reorder', function() {
    expect(insertionSort([{value: 3, ind: 0}, {value: 3, ind: 1}, {value: 3, ind: 2}, {value: 3, ind: 3}])).to.eql([{value: 3, ind: 0}, {value: 3, ind: 1}, {value: 3, ind: 2}, {value: 3, ind: 3}]);
  }); 

  it('An unsorted array of integers should return a sorted array', function() {
    expect(insertionSort(testingTransform([11, 8, 5, 3, 2, 1])).map(v => v.value)).to.eql([1, 2, 3, 5, 8, 11]);
  });

  it('An unsorted array of integers should return a sorted array', function() {
    expect(insertionSort(testingTransform([5, 8, 1, 2, 11])).map(v => v.value)).to.eql([1, 2, 5, 8, 11]);
  });

});