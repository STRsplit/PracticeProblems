/* Find if two linked lists intersect.
If they do, return the node where intersection occcurs */

/*Example:
      A1 -> A2 ->
                 \
                  C1 -> C2 -> C3
                 /
B1 -> B2 -> B3 ->

Intersection occurs at C1 */



/* Decent Solution */

// const getLastNode = (list, barrier) => {
//   let node = list;
//   let count = 1;
//   while(count <= barrier && node.next){
//     count++;
//     node = node.next;
//   }
//   return node;
// }
// const getListLength = (list) => {
//   let count = 1;
//   let node = list;
//   while(node.next){
//     count++;
//     node = node.next;
//   }
//   return count;
// }

// const findIntersection = (l1, l2) => {
//   if(!l1 && !l2){
//     return false;
//   }
//   if(getLastNode(l1, getListLength(l1)) !== getLastNode(l2, getListLength(l2))){
//     return null;
//   }
//   let nodeALen = getListLength(l1);
//   let nodeBLen = getListLength(l2);

//   let nodeA = getLastNode(l1, nodeALen)
//   let nodeB = getLastNode(l2, nodeBLen);

//   while(nodeA !== nodeB){
//     --nodeALen;
//      nodeA = getLastNode(nodeA, nodeALen);
//     --nodeBLen;
//      nodeB = getLastNode(nodeB, nodeBLen);
//   }
//   return nodeA;
// }

/*Better solution */

const getTail = (list) => {
  let node = list;
  while(node.next){
    node = node.next;
  }
  return node;
}

const findIntersection = (l1, l2) => {
  if(!l1 && !l2){
    return false;
  }
  let nodeA = l1;
  let nodeB = l2;
  if(getTail(l1) !== getTail(l2)){
    return null;
  }
  while(nodeA !== nodeB){
     nodeA = nodeA.next === null ? l2 : nodeA.next;
     nodeB = nodeB.next === null ? l1 : nodeB.next;
  }
  return nodeA;
}

// let l1 = new LL();
// l1.addToTail(4);
// l1.addToTail(5);
// l1.addToTail(1);
// l1.addToTail(6);
// let l2 = new LL();
// l2.addToTail(2);
// l2.addToTail(3);
// l2.tail.next = l1.head.next


// let y = findIntersection(l1.head, l2.head)
// console.log(y)