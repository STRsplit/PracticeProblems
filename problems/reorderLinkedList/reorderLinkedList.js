// const LinkedList = require('../helpers.js').LinkedList

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const getLength = (LL) => {
    let counter = 0;
    let curr = LL;
    while(curr){
        counter++;
        curr = curr.next || null;
    }
    return counter;
}

const reverseList = (listSection) => {
    let curr = listSection;
    let next = null;
    let previous = null;
    while(curr){
        next = curr.next;
        curr.next = previous;
        previous = curr;
        curr = next;
    } 
    return previous;
}

const cutList = (LL, mid) => {
  if(!LL || !mid){
    return null;
  }

  let count = 0;
  let curr = LL;
  let previous = null;
  
  while(count < mid){
      count++;
      previous = curr;
      curr = curr.next;
  }
  let secondHalf = curr.next;
  curr.next = null;
  return secondHalf;
}
var reorderList = function(head) {
  let listLength = getLength(head);
  let midPoint = Math.floor(listLength / 2);
  if(listLength && listLength > 2){
    let reversed2nd = reverseList(cutList(head, midPoint));
    let firstHalf = head;
    let firstNext = head.next;
    let secondNode = reversed2nd;
    let secondNext = null;
    
    while(firstNext && secondNode){
      secondNext = secondNode.next;
      firstHalf.next = secondNode
      secondNode.next = firstNext;
      firstHalf = firstNext;
      firstNext = firstHalf.next
      secondNode = secondNext;
    }  
  }
};


// let l1 = new LinkedList;
// l1.addToTail(1);
// l1.addToTail(2);
// l1.addToTail(3);
// l1.addToTail(4);

// reorderList(l1.head)

