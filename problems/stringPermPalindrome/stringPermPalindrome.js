//is a string a permutation of a palindrome

const palindromePerm = (str) => {
  let storage = new Set();

  for(let i = 0; i < str.length; i++){
    if(str[i] === ' ') continue;
    let charFormatted = str[i].toLowerCase();
    if(storage.has(charFormatted)){
      storage.delete(charFormatted)
      continue;
    }
    storage.add(charFormatted);
  }
  return storage.size <= 1
}
