/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};
var ListNode = function(value){
  this.value = value;
  this.next = null;
}
//write methods here!

LinkedList.prototype.addToTail = function(value) {
  let node = new ListNode(value);
  if(!this.head){
    this.head = node;
  } if(this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  if(!this.head){
    return null;
  }
  if(this.head === this.tail){
   this.head = this.tail = null;
  } else {
    let temp = this.head;
    this.head = this.head.next;
    return temp.value;
  }
};

LinkedList.prototype.contains = function(value) {
  let node = this.head;
  if(!node){
    return false;
  }
  while(node){
    if(node.value === value){
      return true;
    }
    node = node.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  return new ListNode(value);
};


