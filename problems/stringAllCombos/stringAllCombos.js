const findAllCombos = (str) => {
  let combos = [];

  const generatePerms = (string, currString = '') => {
    if(!string.length){
      return;
    }

    for(let i = 0; i < string.length; i++){
      let now = currString + string[i];
      combos.push(now);
      generatePerms(string.slice(0, i) + string.slice(i + 1), now)
    }
  }
  generatePerms(str)
  return combos;
}
