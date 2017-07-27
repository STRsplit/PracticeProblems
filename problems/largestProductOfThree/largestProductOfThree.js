/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  let result;

  const gatherProduct = (startInd, product = 1, set = new Set()) => {
    if((result === undefined || product > result) && set.size === 3){
      result = product;
      return;
    }
    if(set.size === 3){
      return;
    }

    for(let i = startInd; i < array.length; i++){
      let currProd = product * array[i];
      set.add(array[i])
      gatherProduct(startInd += 1, currProd, set)
      set.delete(array[i]);
    }
    return;
  }
  gatherProduct(0)
  return result;
};
