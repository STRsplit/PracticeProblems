/*Reverse Linked List */

// class ListNode {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }
// class LL {
//   constructor(){
//     this.tail = this.head = null;
//   }
// }
//For Testing Purposes://
let ListNode = (value) => {
    this.value = value;
    this.next = null;
}
let LL = () => {
  this.tail = null;
  this.head = null;
}

LL.prototype.addToTail = function(value) {
  let node = new ListNode(value);
  if(!this.head){this.head = node}
  if(this.tail){this.tail.next = node}
  this.tail = node;
};

const listFromArray = (array) => {
  let list = new LL();
  array.forEach(el => {
    list.addToTail(el)
  })
  return list;
}

const reverseLL = (lList) =>{
  let currNode = lList.head;
  let nextNode = null;
  let prevNode = null;
  while(currNode){

    nextNode = currNode.next;
    currNode.next = prevNode;
    if(!prevNode){
      lList.tail = currNode
    }
    if(!nextNode){
      lList.head = currNode;
    }
    prevNode = currNode;
    currNode = nextNode;
  }
  return lList;
}
let a = listFromArray([5, 3, 212])