/*
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
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */
let counter;

binarySearch = function (array, target){
  counter = 0;
  if(!array || (!target && target !== 0) || !array.length){
    return null;
  }
  let begin = 0;
  let end = array.length - 1;
  while(begin <= end){
    counter++;
    let mid = Math.floor((end + begin) / 2);
    if(target === array[mid]){
      return mid;
    } else if(target < array[mid]){
      end = mid - 1;
    } else {
      begin = mid + 1;
    }
  }
  return null;
}


