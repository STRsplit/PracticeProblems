/* =====================================================
Determine if a tree is symmetric. A tree is defined as symmetric if the branches from the root (left and right) are mirror images of one another. 

Example of Symmetric:  
    1
   / \
  2   2
 / \ / \
3  4 4  3

Example of Asymmetric: 
    1
   / \
  2   2
   \   \
   3    3

=======================================================*/

/*IF USING STAND ALONE - TESTS IMPORT THIS DIFFERENTLY
const { mapTrees, ListNode } = require('../helpers.js');

let x = mapTrees([4, 2, 6, 1, 3, 5, 7]);
let sym = mapTrees([1, 2, 2, 3, 4, 4, 3]); */


function _walkTree(leftNode, rightNode) { 
    if((!leftNode && rightNode) || (!rightNode && leftNode)){
        return false;
    }        
    if(leftNode.val !== rightNode.val){
        return false;
    }
    if(leftNode.left && !_walkTree(leftNode.left, rightNode.right)){
       return false;
    }
    if(leftNode.right && !_walkTree(leftNode.right, rightNode.left)){
        return false
    }
    return true;
}

function isTreeSymmetric(tree) {
    if(!tree){
        return true;
    }
    return _walkTree(tree.left, tree.right)
}
