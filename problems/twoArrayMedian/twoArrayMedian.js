/* Given two arrays, find the median value */

const findArraysMedian = (array1 = [], array2 = []) => {
  if(!array1.length && !array2.length){
    return null;
  }
  let combinedLength = array1.length + array2.length;
  let medianCount = Math.floor(combinedLength / 2);

  let a1Count = 0;
  let a2Count = 0;
  let lastVal;
  let prevVal;

  if(!array2.length){
    if(combinedLength % 2 === 0){
      prevVal = array1[medianCount - 1];
    }
    lastVal = array1[medianCount];
    a1Count = medianCount + 1;
  }
  
  while((a1Count + a2Count) <= medianCount){
    if(array1[a1Count] === undefined || array2[a2Count] < array1[a1Count]){
      prevVal = lastVal;
      lastVal = array2[a2Count]
      a2Count++;
    } else if(array2[a2Count] === undefined || array1[a1Count] < array2[a2Count]){
      prevVal = lastVal;
      lastVal = array1[a1Count]
      a1Count++;
    } else if(array1[a1Count] === array2[a2Count]){
      lastVal = prevVal = array1[a1Count];
      a1Count++;
      a2Count++;
    }
  }

  if(combinedLength % 2 === 0){
    return (lastVal + prevVal) / 2
  } 
  return lastVal;
}

let a = findArraysMedian([1, 3, 5], [4, 8, 10, 11]);
console.log(a)