// const treeHelpers = require('../../helpers.js');
// let newTreeNode = treeHelpers.newTreeNode;
// let mapTrees = treeHelpers.mapTrees;

/* Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree. 

Example:
Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7  

      Merged tree:
       3
      / \
     4   5
    / \   \ 
   5   4   7 */



const mapTrees = (array) => {
    let treeArray = array.map((value, idx) => {
        if(value === null){
            return null;
        }
        let node = new TreeNode(value);
        return node;
    }).map((treeNode, ind, arr) => {
      if(ind !== 0){
          let parent = arr[Math.floor((ind - 1) / 2)];
            if(parent){
                if(ind % 2 === 0){
                    parent.right = treeNode;
                } else {
                    parent.left = treeNode;
                }
            }
        }
        return treeNode;
    })
   return treeArray[0];
}


const mergeBST = (tree1, tree2) => {
  if(!tree1 && !tree2){
    return null;
  }

  if(tree1 && tree2){
    let newRoot = new TreeNode(tree1.val + tree2.val);
    newRoot.left = mergeBST(tree1.left || null, tree2.left || null);
    newRoot.right = mergeBST(tree1.right || null, tree2.right || null);
    return newRoot;
  }
  if(!tree1 && tree2){
    return tree2;
  }
  if(tree1 && !tree2){
    return tree1;
  }
}