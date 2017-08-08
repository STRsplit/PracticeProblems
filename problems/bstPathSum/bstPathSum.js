/* Given a tree and targetSum, find if any tree path, from root to leaf, sums to the targetSum. */

// const { mapTrees, ListNode } = require('../helpers.js');

function hasPathWithGivenSum(tree, targetSum) {
    if(!tree){
        return 0 === targetSum;
    }
    if(!tree.left && !tree.right){
        return tree.val === targetSum;
    }
    const _findSum = (node, currSum = 0) => {
        if(!node.left && !node.right){
            return (currSum + node.val) === targetSum;
        }
        if(node.left && _findSum(node.left, currSum + node.val)){
            return true;
        }
        if(node.right && _findSum(node.right, currSum + node.val)){
            return true;
        }
        return false;
    }
    return _findSum(tree)
}

