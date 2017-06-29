/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



const commonCharacters = function(string1, string2) {
  let letterMap = new Map();
  let [arg1, ...rest] = Array(...arguments);
  let remainingLetters = rest.join('')
  let resultString = '';
  
  for(let i = 0; i < arg1.length; i++){
    let currLet = arg1.charAt(i);
    if(!remainingLetters.includes(currLet) || letterMap.has(currLet)){
      continue;
    }
    resultString += currLet;
    letterMap.set(currLet, currLet)
  }
  return resultString;
};
