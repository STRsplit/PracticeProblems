/* FOR INCLUDED TESTING, COMMENT OUT THE FOLLOWING LINES UNTIL CALCULATE INCREASE. */
const fs = require('fs');
const [line1, line2] = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const [ N, K, [...priceData] ] = [Number(line1.split(' ')[0]), Number(line1.split(' ')[1]), line2.split(' ').map(v => Number(v))];

const calculateIncrease = (subRange, start, subLen) => {
  //Just for testing purposes
  if(!Array.isArray(subRange)) {
    throw new TypeError('subRange invalid data type')
    return;
  }
  if(typeof start !== 'number'){
    throw new TypeError('start invalid data type')
    return;
  }
  if(typeof subLen !== 'number'){
    throw new TypeError('subLen invalid data type')
    return;
  }

  let increase = 0;
  let rangeLen = start + subLen;
  for(let i = start; i < rangeLen - 1; i++){
    if(subRange[i] === subRange[i + 1]){
      continue;
    }
    if(subRange[i] > subRange[i + 1]){
      increase--;
      continue;
    } else {
      let x = i + 1;
      while(x < rangeLen){
        if(subRange[i] < subRange[x]){
          increase++;
        } else {
          break;
        }
        x++;
      }
    }
  }
  return increase;
}

const findSubranges = (n, k, priceData) => {
  //Not sure if it should handle n > priceData.length?
  if(!n || !k || !priceData || k > n){
    return null;
  }
  //Just for testing purposes
  if(typeof n !== 'number'){
    throw new TypeError('n invalid data type')
    return;
  }
  if(typeof k !== 'number'){
    throw new TypeError('k invalid data type')
    return;
  }
  if(!Array.isArray(priceData)) {
    throw new TypeError('priceData invalid data type')
    return;
  }

  let currData = priceData.slice();
  let subRangeValues = new Map();
  let i = 0;
  while(i < n - (k - 1)){
    subRangeValues.set(i, (calculateIncrease(currData, i, k)))
    i++;
  }
  return [...subRangeValues.values()]
}

//as stated - output each to a new line in console or file.
/* FOR INCLUDED TESTING, COMMENT OUT THE FOLLOWING LINE. */
findSubranges(N, K, priceData).forEach(v => console.log(v))
