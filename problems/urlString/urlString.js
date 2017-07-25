
const urlString = (str, max) => {
  let storage = '';

  for(let i = 0; i < str.length && storage.length < max; i++){
    if(str.charAt(i) === ' '){
      if(str.charAt(i - 1) !== ' ' && storage.length){
        storage += '%20';
      } 
      continue;
    }
    storage += str.charAt(i);
  }
  return storage;
}
