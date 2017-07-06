describe('Second Largest Element in BST', function() {
  it('should return null if passed a null value', function() {
    assert.deepEqual(secondLG(mapTreeNodes([])[0]), null, 'A null value should return null');
  });
  it('Should return null if BST only has a root element', function() {
    assert.deepEqual(secondLG(mapTreeNodes([8])[0]), null, 'A tree with only a root should return null.');
  });

  it('Should return root value if BST has only one left and one right node', function() {
    assert.equal(secondLG(mapTreeNodes([8,4,11])[0]), 8, 'Should return root value of a tree with only one left && right.');
  });

  it('Should handle null values in array used to keep levels even.', function() {
    expect(secondLG(mapTreeNodes([8,4,11,null, null, 9,13])[0])).to.equal(11);
  });

  it('Should handle unbalanced left side of root only tree.', function() {
    expect(secondLG(mapTreeNodes([8,4,null,3, 6, null, null, null, null, 5, null])[0])).to.equal(6);
  });

   it('Should handle unbalanced right side of root only tree.', function() {
    expect(secondLG(mapTreeNodes([8,null,11, null, null, 9, 13])[0])).to.equal(11);
  });

  it('Should handle unbalanced right side of root only tree with deepest leaf being left side.', function() {
    expect(secondLG(mapTreeNodes([8,null,11, null, null, 9, 13, null, null, null, null, null, null, 12, null])[0])).to.equal(12);
  });  
  it('Should handle unbalanced right side of root only tree with deepest leaf being left side.', function() {
    expect(secondLG(mapTreeNodes([10, 6, null, null, 8, null, null, null, null, 7, 9])[0])).to.equal(9);
  }); 
  it('Should handle unbalanced right side of root only tree with deepest leaf being left side.', function() {
    expect(secondLG(mapTreeNodes([10, 6, 14, null, 8, 12, 18, null, null, 7, 9])[0])).to.equal(14);
  }); 
});