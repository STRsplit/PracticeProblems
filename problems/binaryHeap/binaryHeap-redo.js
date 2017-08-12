
class BinaryHeap {
  constructor(compare) {
    this._heap = [];
    this.heapSize = 0;
    this._compare = compare ? compare : function (a,b) {
      return a < b
    }
  }
  _sortOut (a,b) {
    return a - b;
  }
  getRoot () {
    return this._heap[0] || null;
  }
  findChildInds (parentInd) {
    return [((parentInd * 2) + 1), ((parentInd * 2) + 2)]
  }
  findParentInd (nodeInd) {
    return Math.floor((nodeInd - 1) / 2);
  }
  getParentVal (childNodeInd) {
    let parentInd = this.findParentInd(childNodeInd);
    return this._heap[parentInd];
  }
}


BinaryHeap.prototype.insert = function (value){
  this._heap.push(value);
  this.heapSize++;
  let currNodeInd = this.heapSize - 1;
  let currNodeVal = this._heap[currNodeInd];
  let parentInd = this.findParentInd(currNodeInd);
  while(this._compare(currNodeVal, this._heap[parentInd])){
    this.swapVals(currNodeInd, parentInd)
    currNodeInd = parentInd;
    parentInd = this.findParentInd(currNodeInd);
  }
}
BinaryHeap.prototype.swapVals = function (ind1, ind2) {
  let temp = this._heap[ind1];
  this._heap[ind1] = this._heap[ind2];
  this._heap[ind2] = temp;
}
BinaryHeap.prototype.removeRoot = function () {
  if(!this.heapSize){
    return null;
  }
  if(this.heapSize === 1){
    this.heapSize--;
    return this._heap.pop();
  }
  this.heapSize--;
  this.swapVals(0, this.heapSize)
  let removedVal = this._heap.pop();
  let currNode = this.getRoot();
  let currNodeInd = 0;
  let flag = true;
  
  while((currNodeInd < this.heapSize - 1) && flag){
    let [a, b] = this.findChildInds(currNodeInd);
    [a, b] = this._compare(this._heap[a], this._heap[b]) ? [a, b] : [b, a];
    if(this._compare(this._heap[a], currNode)){
      this.swapVals(currNodeInd, a);
      currNodeInd = a;
    } else {
      flag = false;
    }
  }
  return removedVal;
}
module.exports = {
  BinaryHeap
}