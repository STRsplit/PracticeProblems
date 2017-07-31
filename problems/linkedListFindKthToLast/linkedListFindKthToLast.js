/* Return the kth -> last elements in a linkedList */
const { LinkedList } = require('../helpers.js');


const findEndFrom = (ll, k) => {
  if(!ll){
    return null;
  }

  let oddCount = 1;
  let oddPointer = ll;
  let evenCount = 2;
  let evenPointer = ll.next;
  while(oddPointer){
    if(oddCount === k){
      return oddPointer;
    }
    if(evenCount === k){
      return evenPointer;
    }
    oddCount += 2;
    evenCount += 2;
    oddPointer = oddPointer.next ? oddPointer.next.next : null;
    evenPointer = evenPointer.next ? evenPointer.next.next : null;
  }
  return null;
}

// var list = new LinkedList();    //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.addToTail(5);
// list.addToTail(8);
// list.addToTail(11);
// list.addToTail(5);
// list.addToTail(5);
// list.addToTail(5);
// list.addToTail(5);
// list.addToTail(14);

// x = findEndFrom(list.head,8);
// console.log(x) 
