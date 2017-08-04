/*Assumptions: 
1. Assume array is ordered for Binary Search Tree - ie 
the elements are ordered so that a binary tree can be constructed without manipulating array order.
2. Assume unbalanced tree will have null values to fill level */

// const largestNode = (parent, child) => {
//   if (!child.right) {
//     return [parent, child];
//   } else {
//     return largestNode(child, child.right);
//   }
// }

// const secondLG = (head) => {
//     if(!head){
//         return null;
//     }
//   let [parent, child] = largestNode(null, head);
//   if (!child.left) {
//     return parent ? parent.val : null;
//   }

//   return largestNode(child, child.left)[1].val;
// }

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


const secondLG = (head) => {
  let count = 0;

  const walk = (node) => {
    if (!node) {
      return null;
    }

    let val = walk(node.right);   
    if (val !== null) { return val; }

    count++;
    if (count === 2) {
      return node.val;
    }

    return walk(node.left); 
  }  

  return walk(head);
}
const nthLG = (head, n) => {
  let count = 0;

  const walk = (node) => {
    if (!node) {
      return null;
    }

    let val = walk(node.right);   
    if (val !== null) { return val; }

    count++;
    if (count === n) {
      return node.val;
    }

    return walk(node.left); 
  }  

  return walk(head);
}





