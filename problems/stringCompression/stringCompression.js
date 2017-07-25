/*Implement a method to perform basic string compression using the counts of repeated characters. */

/** Test for performance: https://jsperf.com/stringcompression **/
//Good method
const compressString = (str) => {
  if(!str){
    return null;
  }
  if(str.length <= 2){
    return str;
  }
  let compressed = str.charAt(0);
  let lastLetter = str.charAt(0);
  let lastChange = 0;

  for(let i = 1; i < str.length; i++){
    if(str.charAt(i) !== lastLetter){
      compressed += (i - lastChange) + str.charAt(i);
      lastLetter = str.charAt(i);
      lastChange = i;
    }
  }
  return compressed.length < str.length ? compressed : str;
}
//Experimenting --- not possible to optimize this way... other was cleaner, better performing with long strings.
const reCompressString = (str) => {
  let letterMap = [[str.charAt(0), 0]];
  let lastChange = 0;
  let changes = 0;
  let len = str.length;
  for(let i = 1; i < len; i++){
    if(letterMap[changes][0] !== str[i]){
      letterMap[changes][1] = (i - lastChange);
      letterMap.push([str[i], len - i])
      lastChange = i;
      changes++;
    }
  }
  let returnString = '';
  letterMap.forEach(([letter, freq]) => {
    returnString += letter + freq
  })
  return returnString.length < len ? returnString : str;
}
