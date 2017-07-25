//given two strings are they within one edit of one another?

const isSingleEdit = (s1, s2) => {
  let len1 = s1.length;
  let len2 = s2.length;
  let [longer, shorter] = len1 >= len2 ? [s1,s2] : [s2,s1];
  if(1 < (len1 - len2) || (len1 - len2) < -1 ){
    return false;
  }
  let editCount = 2;
  for(let i = 0; i < longer.length; i++){
    if(!editCount){
      return false;
    }
    if(!shorter.includes(longer.charAt(i))){
      --editCount;
    }
  }
  return !!editCount;
}
