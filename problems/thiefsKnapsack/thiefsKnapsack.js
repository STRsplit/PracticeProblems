/* given a knapsack with known capacity, N, find the highest accumulated value of given items (Weight, Value) that can be stored in the knapsack. */

const findHighestValue = (N, K, items) => {
  if(!K || !N){
    return 0;
  }

  let storage = [...Array(K + 1).keys()].map(v => Array(N + 1).fill(0));

  const _walkValues = (N, items) => {
    for(let row = 1; row <= K; row++){
      let itemWeight = items[row-1][0];
      for(let wt = 0; wt <= N; wt++){
        let remWeight = wt - itemWeight;
        if(remWeight >= 0){
          let remVal = storage[row-1][remWeight];
          storage[row][wt] = Math.max(storage[row-1][wt], (remVal + items[row-1][1]))
        } else {
          storage[row][wt] = storage[row-1][wt]
        }
      }
    }
    return storage[K][N];
  }
  return _walkValues(N, items);
}
