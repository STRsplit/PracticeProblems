/* Given an array of non-negative integers, determine if it is possible to reach the target
 sum exactly by adding up the integer values in the array. */

 // const subSetSum = (arr, target) => {
 //  let dp = [Array(target + 1).fill(false)];
 //  let result = [];

 //  for(let r = 0; r < arr.length; r++){
 //    let found = [];
 //    let dpRow = r + 1;
 //    for(let c = 0; c <= target; c++){
 //      if(dp[dpRow - 1][c]){
 //        found.push(true)
 //      } else if(arr[r] > c){
 //        found.push(false)
 //      } else if(arr[r] === c){
 //        found.push(true)
 //      } else {
 //        let rem = c - arr[r];
 //        found.push(dp[dpRow-1][rem]);
 //      }
 //    }
 //    if(found[target]){
 //      dpRow--;
 //      let rem = target - arr[r];
 //      let completedSet = [arr[r]]
 //      while(rem){
 //        while(dp[dpRow][rem]){
 //          dpRow--;
 //        }
 //        completedSet.push(arr[dpRow]);
 //        rem -= arr[dpRow];
 //        dpRow--;
 //      }
 //      found[target] = false;
 //      result.push(completedSet);
 //    }
 //    dp.push(found);
 //  }
 //  return result;
 // }

/* Recursive Solution */

const subSetSum = (numbers, target) => {
 let result = [];

 const walk = (startIdx, sum = 0, set = new Set()) => {
  if (sum === target) {
    result.push([...set.keys()]);
    return;
  }

  if (sum > target) {
    return;
  }

  for (let idx = startIdx; idx < numbers.length; idx++) {
    set.add(numbers[idx]);
    walk(idx + 1, sum + numbers[idx], set);
    set.delete(numbers[idx]);
  }

  return;
 }

 walk (0);
 return result;
}
const allsubSets = (numbers) => {
 let result = [];

 const walk = (startIdx, set = new Set()) => {
  console.log(set)
  if (set.size === numbers.length) {
    result.push([...set.keys()]);
    return;
  }

  for (let idx = startIdx; idx < numbers.length; idx++) {
    set.add(numbers[idx]);
    walk(idx + 1, set);
    set.delete(numbers[idx]);
  }

  return;
 }

 walk (0);
 return result;
}

// let y = subSetSum([1, 3, 4, 7]);
// console.log(y)