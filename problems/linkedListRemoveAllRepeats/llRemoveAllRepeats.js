const { LinkedList } = require('../helpers.js');

const deleteDuplicates = function(head) {
    if(!head){
        return null;
    }
    if(!head.next){
        return head;
    }
    let uniqueNodes = [];
    let curr = head;
    let nextNode;
    while(curr) {
        nextNode = curr.next;
        if(nextNode && (nextNode.value === curr.value)){
            let node = nextNode.next;
            while(node && (node.value === curr.value)){
                node = node.next;
            }
            curr = node;
        } else {
            uniqueNodes.push(curr);
            curr = nextNode;
        }
    }
    uniqueNodes.forEach((llNode, ind) => {
        if(uniqueNodes[ind + 1]){
            llNode.next = uniqueNodes[ind+1];
        } else {
            llNode.next = null;
        }
    })
    return uniqueNodes[0] || [];
};

var list = new LinkedList();    //yields 'null'
// list.addToTail(4);
list.addToTail(2);
list.addToTail(5);
list.addToTail(5);
list.addToTail(5);
list.addToTail(5);
list.addToTail(6);



console.log(deleteDuplicates(list.head))



