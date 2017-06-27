/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  //deal with a total of 0
  if(!total){
    return 0;
  }
  //set options accumulator
  let changeOptions = 1;

  //turn the coin pieces into a Map
  let coinMap = new Map();
  let coins = [
    ['1p', 1], ['2p', 2], ['5p', 5], ['10p', 10],
    ['20p', 20], ['50p', 50], ['£1', 100], ['£2', 200]
  ];
  coins.forEach(coin => {
    coinMap.set(coin[0], coin[1])
  })
  //iterate over coin values and find ways to make change
  for(let value of coinMap.values()){
    //divide the change by the value of the key
    if(value <= total && value > 1){
      //add the whole number dividend into the total ways
      changeOptions += (Math.floor(total / value));
    }
  }
    //return total ways
    return changeOptions;
};


