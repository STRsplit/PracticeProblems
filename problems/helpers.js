const TreeNode = function(value) {
  this.val = value;
  this.left = this.right = null;
}

const mapTrees = (array) => {
    let treeArray = array.map((value, idx) => {
        if(value === null){
            return null;
        }
        let node = new TreeNode(value);
        return node;
    }).map((treeNode, ind, arr) => {
      if(ind !== 0){
          let parent = arr[Math.floor((ind - 1) / 2)];
            if(parent){
                if(ind % 2 === 0){
                    parent.right = treeNode;
                } else {
                    parent.left = treeNode;
                }
            }
        }
        return treeNode;
    })
   return treeArray[0];
}

const LinkedList = function() {
  this.head = this.tail = null;
};
const ListNode = function(value){
  this.value = value;
  this.next = null;
}

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
