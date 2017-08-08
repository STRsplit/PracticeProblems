const findPerms = (str) => {
  if(!str){
    return null;
  }
  const getPerms = (arr, perm, storage = []) => {
    if(!arr.length){
      storage.push(perm);
      return;
    }

    for(let j = 0; j < arr.length; j++){
      let now = perm.concat(arr[j]);
      getPerms(arr.slice(0, j).concat(arr.slice(j + 1)), now, storage)
    }
    return storage;
  }
 return getPerms(t, '')
}
