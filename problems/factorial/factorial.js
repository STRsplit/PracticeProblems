const facts = (num) => {
  if(num === 1){
    return num;
  }

  return num * facts(num - 1);
}

