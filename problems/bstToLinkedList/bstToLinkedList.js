const { mapTrees, ListNode } = require('../helpers.js');

let x = mapTrees([4, 2, 6, 1, 3, 5, 7]);

const convertBSTToLL = (root) => {
  let results = [];

  const walkTree = (node) => {
    let nodeQueue = [node];
    let currHead = null;
    let currLLNode = null;
    let currCount = 0;
    while(nodeQueue.length){
      currCount++;
      let ourNode = nodeQueue.shift();
      if(ourNode.left){
        nodeQueue.push(ourNode.left)
      }
      if(ourNode.right) {
        nodeQueue.push(ourNode.right)
      }
      ourNode = new ListNode(ourNode.val)
      if(!currHead){
        currHead = ourNode;
        currLLNode = ourNode;
      } else {
        currLLNode.next = ourNode;
        currLLNode = ourNode;
      }
      if(currCount === Math.pow(2, results.length)){
        results.push(currHead);
        currHead = null;
        currLLNode = null;
        currCount = 0;
      }
    }
    return;
  }
  walkTree(root)
  return results;
}

console.log(convertBSTToLL(x)[2].next.next)