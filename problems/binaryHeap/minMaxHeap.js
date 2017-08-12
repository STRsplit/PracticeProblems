const { BinaryHeap } = require('./BinaryHeap.js')

const isGreater = function(a, b) {
  return a > b;
}

const getMedianValue = (values) => {
  let min = new BinaryHeap();
  let max = new BinaryHeap(isGreater);
  for(let i = 0; i < values.length; i++){
    let currVal = values[i];
    max.insert(currVal);
    let minRoot = min.getRoot();
    let maxRoot = max.getRoot();
    if(minRoot && minRoot < maxRoot){
      let temp = min.removeRoot();
      min.insert(max.removeRoot());
      max.insert(temp);
    }
    if(max.heapSize > min.heapSize + 1){
      let nowMax = max.removeRoot();
      min.insert(nowMax);
    }
  }
  return max.heapSize > min.heapSize ? max.getRoot() : (max.getRoot() + min.getRoot()) / 2;
}

module.exports = { getMedianValue };