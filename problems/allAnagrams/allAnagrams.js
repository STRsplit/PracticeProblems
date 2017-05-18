/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  let stringStorage = [];
  if(!string.length){
    return stringStorage;
  }

  const _getAllAnagrams = (ana, str) => {
    if(str === '') {
      stringStorage.push(ana);
    }

    for(let x = 0; x < str.length; x++){
      _getAllAnagrams(ana + str[x], str.slice(0, x) + str.slice(x + 1));
      }
    }
  _getAllAnagrams('', string);
  return stringStorage;
};

