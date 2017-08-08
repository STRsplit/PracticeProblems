/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]

*/

var rockPaperScissors = function (n) {
  let plays = ['rock', 'paper', 'scissors'];
  let possible = [];

  const getPlays = (options, curr) => {
    if(curr.length === options.length){
      possible.push(curr);
      return;
    }
    for(let i = 0; i < options.length; i++){
      let currPlay = curr.concat(options[i]);
      getPlays(options, currPlay)
    }
  }
  getPlays(plays, [])
  return possible;
};

