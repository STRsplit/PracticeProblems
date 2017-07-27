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

var list = new LinkedList();    //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.addToTail(8);
list.addToTail(11);
list.addToTail(5);
// console.log(list)

let x = deleteDuplicates(list.head);
console.log(x.next.next.next)