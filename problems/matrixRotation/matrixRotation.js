/* Given an n x n matrix, rotate the elements 90 degrees using constant space */

const { Matrix } = require('../helpers.js');


const rotateMatrix = (matrix) => {
  if(!matrix || !matrix.length){
    return false;
  }
  let n = matrix.length;
  for(let i = 0; i < n / 2; i++){
    let first = i;
    let last = n - 1 - i;
    for(let x = first; x < last; x++){
      let offset = x - first;
      let top = matrix[first][x];
      matrix[first][x] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last-offset];
      matrix[last][last-offset] = matrix[x][last];
      matrix[x][last] = top;
    }
  }
  return matrix;
}

console.log(Matrix(4, 1))

              