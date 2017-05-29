//introduce mins array into the global scope so we can test function efficiency. 
//'Mins' array stores value, index and round when min changes.

let mins;
// Feel free to add helper functions if needed.

const selectionSort = function(array) {
  mins = [];
  if(!array){
    return null;
  }

  for(let i = 0; i < array.length - 1; i++){
    let min = i;

    for(let j = i + 1; j < array.length; j++){
      if(array[min] > array[j]){
        //for testing efficiency
        let priorMin = min;
        min = j;
        //for testing efficiency 
        mins.push({
          minValue: array[min],
          minIndex: min, 
          priorMinVal: array[priorMin],
          priorMinIndex: priorMin,
          round: i});
      }
    }
    if(min !== i){
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

// console.log(selectionSort([0, 2, 1, 5, 3]), mins);
// console.log(selectionSort([5, 6, 1]), mins);
// console.log(selectionSort([1, 2, 3, 4, 5]), mins);