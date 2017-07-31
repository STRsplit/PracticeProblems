/*Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3. */

const { LinkedList } = require('../helpers.js');

const deleteDuplicates = function(head) {
    if(!head){
        return null;
    }
    let goodVals = new Map();
    goodVals.set(head.value, head);
    let prev = head;
    let curr = head.next;
    while(curr){
        if(!goodVals.has(curr.value) && goodVals.set(curr.value, curr)){
            prev = curr;
            curr = prev.next;
        } else {
            prev.next = curr.next;
            curr = prev.next;
        }
    }
    return head;
};

/* If list unordered */

const deleteDupes = (ll) => {
  if(!ll){
    return null;
  }
  let foundVals = new Set();
  foundVals.add(ll.value, ll)
  let curr = ll;
  let examine = ll.next;
  while(examine){
    let seenVal = foundVals.has(examine.value);
    if(!seenVal && foundVals.add(examine.value, examine)){
      curr.next = examine;
      curr = examine;
      examine = examine.next;
    } else {
      curr.next = examine.next;
      examine = examine.next;
    }
  }
  return ll;
}
var list = new LinkedList();    //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.addToTail(5);
list.addToTail(8);
list.addToTail(11);
list.addToTail(5);
list.addToTail(5);
list.addToTail(5);
list.addToTail(5);
list.addToTail(14);

// console.log(list)

let x = deleteDupes(list.head);
console.log(x, x.next.next.next)