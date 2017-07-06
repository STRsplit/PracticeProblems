/* Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 An island is surrounded by water and is formed by connecting adjacent lands 
 horizontally or vertically. You may assume all four edges of the grid are all 
 surrounded by water. 

 Examples: 
 1) 11110
    11010
    11000
    00000

Solution: 1 island => land never breaks from original.

2)  11000
    11000
    00100
    00011

Solution: 3 islands => [0,0] -> [1,1], [2, 2], [3,3] -> [3, 4]
*/
let test_api = {};

const findIslands = (grid) => {
  /* For testing */
  test_api['ogGrid'] = grid;
  //Need to keep count of islands found
  let islandCount = 0;

  //Need a function to follow a found piece of land until it is not connected to any more land
  const findLand = (grid, x, y) => {
    //x = rows, y = columns
    //Need to setup conditions to deal with land boundaries / ends of islands
    if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === '0'){
      return;
    }
    //set position of x,y to be visited or invalid
    grid[x][y] = '0';
    //now, we can recurse through the function for each possible move (up, down, left, right)
    //Right
    findLand(grid, x, y + 1);
    //Left
    findLand(grid, x, y - 1);
    //Up
    findLand(grid, x + 1, y);
    //Down
    findLand(grid, x - 1, y);
  }

  //Need a function that iterates through each array in the array
  const _findIslands = (x, y) => {
    //if x is equal to the grid length return
    if(x === grid.length){
      return;
    }
    while(y < grid[0].length){
      if(grid[x][y] === '1'){
        //increment island count
        islandCount++;
        //find connected land and visit it
        findLand(grid, x, y);
      }
      //increment column in same row
      y++;
    }
    //increment row, run function again
    _findIslands(++x, 0)
  }
  _findIslands(0,0);
  /*test code */
  test_api['findLand'] = findLand;
  test_api['_findIslands'] = _findIslands;
  test_api['grid'] = grid;
  return islandCount;
}