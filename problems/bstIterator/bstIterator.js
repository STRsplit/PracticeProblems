const { mapTrees } = require('../helpers.js');

const fillSet = (root, set = new Set()) => {
  if(!root){
    return set;
  }
  if(root.right){
    fillSet(root.right, set)
  }
  return fillSet(root.left, set.add(root.val));
}
var BSTIterator = function(root) {
  this.valSet = [...fillSet(root).values()];
};

BSTIterator.prototype.hasNext = function() {
  return !!this.valSet.length;
};

BSTIterator.prototype.next = function() {
  return this.valSet.pop();   
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

// let x = mapTrees([4, 2, 6, 1, 3, 5, 7])
// let iTree = new BSTIterator(x)
// console.log(iTree)
// console.log(iTree.hasNext())