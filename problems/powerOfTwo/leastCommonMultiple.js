const lcm = (num1, num2, counter = 0) => {
  let [largeNum, smallNum] = [Math.max(num1, num2), Math.min(num1, num2)];
  if(largeNum === smallNum || smallNum === 1){
    return largeNum;
  }
  counter++;
  while(largeNum % smallNum !== 0){
    largeNum += Math.max(num1, num2);
  }
  return largeNum;
}