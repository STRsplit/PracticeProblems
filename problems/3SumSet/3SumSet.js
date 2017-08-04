var threeSum = function(nums) {
  let results = [];
  if(!nums || nums.length < 3){
      return results;
  }
  let numsSet = new Set(nums.sort((a,b) => {
     return a - b;
  }));
  const findSets = (startInd, sum = 0, currSet = []) => {
    if(currSet.length === 3 && sum === 0){
      results.push(currSet);
      return;
    }
    if(currSet.length === 3){
        return;
    }
    
    for(let i = startInd; i < nums.length; i++){
      findSets(++i, sum + nums[i], currSet.concat(nums[i]))
    }
    return;
  }
  console.log(numsSet)
  numsSet = [...numsSet.values()]
  findSets(0)
  return results;
};
let x = [-1,0,1,2,-1,-4];
console.log(threeSum(x));
