
const isPowerOfTwo = (num) => {
  let x = num.toString(2);
  console.log(x[x.length -1]);
  return (x.indexOf('1') === x.lastIndexOf('1')) ? true : false;
}
