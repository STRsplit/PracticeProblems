const Matrix = (n, start) => {
  let [startType, startVal] = typeof start === 'number' ? ['number', start] : ['string', 65];
  let secLet = 64;
  let addedString = '';
  let iterateUp = (valType, count) => {
    if(valType === 'number'){
      return count;
    } else {
      console.log(count)
      let repString = '';
      if(count % 91 === 0){
        ++secLet;
        count = 65;
        startVal = 66;
        addedString += String.fromCharCode(secLet);
      }
      repString += addedString + String.fromCharCode((count % 65) + 65);
      return repString;
    }
  }
  let matrix = [];
  for(let i = 0; i < n; i++){
    let innerArray = [];
    for(let x = 0; x < n; x++){
      let value = iterateUp(startType, startVal++)
      innerArray.push(value)
    }
    matrix.push(innerArray)
  }
  return matrix;
}

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
  this.head = null;
  this.tail = null;
};

const ListNode = function(value) {
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

module.exports = {
  LinkedList,
  Matrix
}