describe('mergeBST', function() {
  describe('Basic Functionality', function() {
    it('The mergeBST function should exist', function() {
      expect(mergeBST).to.be.a('function');
    })
    it('MergeBST should have access to Tree creator class', function() {
      expect(new TreeNode(3)).to.deep.equal({val: 3, left: null, right: null});
    })
    it('MergeBST should return null if provided no trees to merge', function() {
      expect(mergeBST(null, null)).equal(null);
    })
    it('Should have access to the array to tree mapper function', function() {
      expect(mapTrees([1, 2, 3]).val).to.equal(1);
      expect(mapTrees([1, 2, 3]).left).to.deep.equal({val: 2, left: null, right: null});
    })
    it('If one tree is passed in, should return that tree', function() {
      expect(mergeBST(mapTrees([1, 2, 3]))).to.deep.equal({val: 1, left: {val: 2, left: null, right: null}, right: {val: 3, left: null, right: null}});
    })
  })  
  describe('Two level BST merge', function() {
    it('Should get the correct root value of merged trees', function() {
      assert.deepEqual(mergeBST(mapTrees([1, 2, 3]), mapTrees([5, 6, 7])).val, 6, 'Two trees both with root node should produce new tree with combined value as root node value');
    });  
    it('Should correctly combine the left node values', function() {
      assert.deepEqual(mergeBST(mapTrees([1, 2, 3]), mapTrees([5, 6, 7])).left, {val: 8, left: null, right: null}, 'Left node should be combined value and represent a tree node itself');
    });  
    it('Should correctly combine the right node values', function() {
      assert.deepEqual(mergeBST(mapTrees([1, 2, 3]), mapTrees([5, 6, 7])).right, {val: 10, left: null, right: null}, 'Right node should be combined value and represent a tree node itself');
    });
    it('Should handle one tree with null values in place of child nodes', function() {
      assert.deepEqual(mergeBST(mapTrees([1, 2, 3]), mapTrees([5, null, 7])).val, 6, 'Tree left should use the value of the tree without a null child');
    });
    it('Should handle one tree with null values in place of child nodes', function() {
      assert.deepEqual(mergeBST(mapTrees([1, 2, 3]), mapTrees([5, null, 7])).left, {val: 2, left: null, right: null}, 'Tree left should use the value of the tree without a null child');
    });
  });
  describe('Multi level BST merge', function() {
    it('Should get the correct root value of merged trees', function() {
      assert.deepEqual(mergeBST(mapTrees([1, 2, 3, null, 5, null, 10]), mapTrees([9, null, 5, null, null, 2, 1])).val, 10, 'Two trees both with root node should produce new tree with combined value as root node value');
    });  
    it('Should handle multiple level trees', function() {
      assert.deepEqual(mergeBST(mapTrees([1, 2, 3, null, 5, null, 10]), mapTrees([9, null, 5, null, null, 2, 1])).left.right, {val: 5, left: null, right: null}, 'A null value should return null');
      assert.deepEqual(mergeBST(mapTrees([1, 2, 3, null, 5, null, 10]), mapTrees([9, null, 5, null, null, 2, 1])).right.right, {val: 11, left: null, right: null}, 'A null value should return null');
    });  
  });
});