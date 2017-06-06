/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */
let counter;
var binarySearch = function (array, target) {
  if(!target && target !== 0 || !array.length){
    return null;
  }
  counter = 0;
  let begin = 0;
  let end = array.length - 1;

  while(begin <= end){
    counter++;
    let mid = Math.floor((end + begin) / 2);
    if(array[mid] === target){
      return mid;
    }
    if(array[mid] > target){
      end = mid - 1;
    }
    if(array[mid] < target){
      begin = mid + 1;
    }
  }
  return null;
};

