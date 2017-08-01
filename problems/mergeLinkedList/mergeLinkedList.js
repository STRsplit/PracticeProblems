const { LinkedList } = require('../helpers.js');

const mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2){
        return !l1 ? l2 : l1;
    }
    let [listPointer, holderNode, list1, list2] = l1.value < l2.value ? [l1, l1, l1.next, l2] : [l2, l2, l1, l2.next];
    
    while(list1 && list2){
        if(list1.value < list2.value) {
            holderNode.next = list1;
            list1 = list1.next;
            holderNode = holderNode.next;
        } else {
            holderNode.next = list2;
            list2 = list2.next;
            holderNode = holderNode.next;
        }
    }
    holderNode.next = list1 === null ? list2 : list1;
    return listPointer;
};

// let listA = new LinkedList();
// listA.addToTail(4);
// listA.addToTail(5);
// listA.addToTail(8);
// listA.addToTail(11);
// listA.addToTail(14);
// let listB = new LinkedList();
// listB.addToTail(1);
// listB.addToTail(2);
// listB.addToTail(9);
// listB.addToTail(10);
// listB.addToTail(12);

// let x = mergeTwoLists(listA.head, listB.head);
// console.log(x)