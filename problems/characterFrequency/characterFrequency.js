/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  let freqChart = {};

  for(let i = 0; i < string.length; i++){
    let currChar = string.charAt(i);
    if(!freqChart[currChar]){
      freqChart[currChar] = [currChar, 1];
    } else {
      freqChart[currChar][1]++;
    }
  }
  let charTuples = Object.keys(freqChart).map(v => freqChart[v]);

  return charTuples.sort((a,b) => {
    if(a[1] === b[1]){
      return a[0].charCodeAt() - b[0].charCodeAt();
    } else {
      return b[1] - a[1];
    }
  })
};
