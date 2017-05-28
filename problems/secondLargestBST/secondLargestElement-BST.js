/*Assumptions: 
1. Assume array is ordered for Binary Search Tree - ie 
the elements are ordered so that a binary tree can be constructed without manipulating array order.
2. Assume unbalanced tree will have null values to fill level */
function TreeNode(value) {
    this.val = value;
    this.left = this.right = null;
}
const mapTreeNodes = (array) => {
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
   return treeArray;
}

var secondLG = function(root) {
    // console.log(root)
    if(!root){
        return null;
    }
    if(!root.left && !root.right){
        return null;
    }
    
    if(root.right){
        if(!secondLG(root.right)){
            return root.val;
        }
        return secondLG(root.right);
    } else {
        if(root.left.right && secondLG(root.left.right) !== root.left.right){
            return root.left.right.val;
        }
        return root.left.val;
    }
};

// console.log(secondLG(mapTreeNodes([8,4,11,3,6,9,13])[0]));
// console.log(secondLG(mapTreeNodes([8,4,11,null, null, 9,13])[0]));
console.log(secondLG(mapTreeNodes([8,4,null,3, 6, null, null, null, null, 5, null])[0]));

