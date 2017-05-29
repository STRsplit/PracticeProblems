describe('selectionSort', function() {
  // minValue: array[min],
  //         minIndex: min, 
  //         priorMinVal: array[priorMin],
  //         priorMinIndex: priorMin,
  //         round: i});
  it('Should return null if passed null', function() {
    assert.deepEqual(selectionSort(null), null, 'A null value should return null');
  });
  it('Should return an empty array if called with an empty array', function() {
    assert.deepEqual(selectionSort([]), [], 'An empty array should return an empty array.');
  });

  it('Should return a single item array when passed an array with just one element', function() {
    assert.deepEqual(selectionSort([5]), [5], 'An array of just one value returns array as is.');
  });

  it('If all elements are in order, mins array should be empty', function() {
    selectionSort([1, 2, 3, 4]);
    expect(mins).to.eql([]);
  });

  it('If array elements are all same values, mins array should be empty ', function() {
    selectionSort([1, 1, 1, 1]);
    expect(mins).to.eql([]);
  }); 

  it('If array\'s first element is larger then the second, the mins array element at 0 should recognize the change', function() {
    selectionSort([4, 3, 2, 1]);
    expect(mins[0].priorMinVal).to.eql(4);
    expect(mins[0].priorMinIndex).to.eql(0);
    expect(mins[0].minValue).to.eql(3);
    expect(mins[0].minIndex).to.eql(1);
  }); 

  it('In the case of an array "[4, 3, 2, 1]", the last element in the mins array should show the change from value 3 to value 2', function() {
    selectionSort([4, 3, 2, 1]);
    let lastEl = mins[mins.length - 1];
    expect(lastEl.priorMinVal).to.eql(3);
    expect(lastEl.priorMinIndex).to.eql(1);
    expect(lastEl.minValue).to.eql(2);
    expect(lastEl.minIndex).to.eql(2);
  }); 

  it('If array has first and second elements swapped, the number of changes to minimum should be just 1', function() {
    selectionSort([3, 1, 4, 5]);
    expect(mins.length).to.eql(1);
    expect(mins[mins.length - 1].round).to.eql(0);
  });

});
