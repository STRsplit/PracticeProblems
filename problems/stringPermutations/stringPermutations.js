

let a = 'xyz';
let t = ['x', 'y', 'z'];

const findPerms = (str) => {
  if(!str){
    return null;
  }
  const getPerms = (currString, perm, storage = []) => {
    if(!currString){
      storage.push(perm);
      return;
    }

    for(let j = 0; j < currString.length; j++){
      let now = perm + currString[j];
      getPerms(currString.slice(0, j) + currString.slice(j + 1), now, storage)
    }
    return storage;
  }
 return getPerms(str, '')
}
console.log(findPerms(a))