const { mapTreesWithParent } = require('../helpers.js')

let x = mapTreesWithParent([8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7])
let y = mapTreesWithParent([8, 4, null, 2, 6, null, null, 1, 3, 5, 7])

const walkLeft = (leftNode) => {
  if(!leftNode.left){
    return leftNode;
  }
  return walkLeft(leftNode.left)
}
const walkUp = (upNode, ourNode) => {
  if(!upNode){
    return null;
  }
  if(upNode.left === ourNode){
    return upNode;
  }
  if(upNode.parent){
    return walkUp(upNode.parent, upNode)
  }
}
const findNextNode = (node) => {
  if(!node){
    return null;
  }
  const _findNextNode = (currNode) => {
    if(currNode.right){
      return walkLeft(currNode.right)
    }
    return walkUp(currNode.parent, currNode)
  }
  return _findNextNode(node);
}