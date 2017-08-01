const { mapTrees } = require('../helpers.js');

/*** INNER FUNCTION, WALKING THE TREE, FAIRLY VERBOSE ***/

// const isBalanced = (treeRoot) => {
//   let stillBalanced = true;
//   if(!treeRoot){
//     return stillBalanced;
//   }

//   const walkTree = (node) => {
//     let count = 0;
//     if(!node){
//       return count; 
//     }
//     count = 1;
//     let leftCount = walkTree(node.left);
//     if(leftCount === null){
//       return null;
//     }
//     let rightCount = walkTree(node.right);
//     if(rightCount === null){
//       return null;
//     }
//     if(Math.abs(leftCount - rightCount) > 1){
//       stillBalanced = false;
//       return null;
//     }
//     return count += Math.max(leftCount, rightCount);
//   }
//   walkTree(treeRoot);
//   return stillBalanced;
// }

/*** MORE CONCISE ***/

const isBalanced = (root) => {
  return helper(root) !== -1;
}

const helper = (node) => {
  if(!node){
    return 0;
  }
  let left = helper(node.left);
  let right = helper(node.right);
  if(left === -1 || right === -1 || Math.abs(left - right) > 1){
    return -1;
  }
  return 1 + Math.max(left, right)
}


