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

const binarySearch = function (array, target, start = null, end = null){
  if(!array || !array.length || !target){
    return null;
  }
  start = start || 0;
  end = end || array.length - 1;
  mid = Math.floor((start + end) / 2);
  if(array[mid] === target){
    return mid;
  } 
  if(start === end){
    return null;
  } else if(array[mid] < target){
    start = mid + 1
    return binarySearch(array, target, start, end);
  } else if(array[mid] > target){
    end = mid - 1;
    return binarySearch(array, target, start, end)
  }
  return null;
}


let x = [1, 4, 8, 10, 12, 14];
console.log(binarySearch(x, 16));
