/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParensAlt = function(input) {
  let currOpen = [];
  let parensString = '[](){}';


  for(let i = 0; i < input.length; i++){
    let currChar = input.charAt(i)
    let charPos = parensString.indexOf(currChar);

    if(charPos === -1){
      continue;
    }
    if(charPos % 2 === 0){
      currOpen.push(currChar);
    } else {
        let lastChar = currOpen.pop();
        if(lastChar !== parensString[charPos - 1]){
        return false;
     } 
   }
  }
  return currOpen.length === 0;
};
//Assertions for basic parenthesis
// console.assert(balancedParens('(') === false, 'A single parenthesis should return false');
// console.assert(balancedParens('()') === true, 'An opening and closing parenthesis should return true');
// console.assert(balancedParens(')(') === false, 'A closing parenthesis coming before an opener should return false');
// console.assert(balancedParens('(())') === true, 'Two opening parenthesis followed by two closing parenthesis should return true');

// //Assertions for parenthesis, brackets and curly braces
// console.assert(balancedParens('[]') === true, 'All openers, followed by their appropriate closers should return true');
// console.assert(balancedParens('[({})]') === true, 'Closing brackets returned in the correct order should return a value of true');
// console.assert(balancedParens('[(]{)}') === false, 'If a closing bracket for one opener comes out of order, the function should return false');

// //Assertions including non bracket characters
// console.assert(balancedParens(' var wow  = { yo: thisIsAwesome() }') === true, 'Brackets in the correct sequence should return true regardless of other characters');
// console.assert(balancedParens(' var hubble = function() { telescopes.awesome();') === false, 'Opening brackets without their closing brackets should return false');