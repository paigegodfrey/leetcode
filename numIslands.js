// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// O(n * m) time
// O(1) space
const numIslands = arr => {
  if (!arr.length) return 0;

  let count = 0;
  let top;
  let left;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      top = i - 1 >= 0 ? arr[i - 1][j] : '0';
      left = j - 1 >= 0 ? arr[i][j - 1] : '0';
      if (arr[i][j] === '1' && top === '0' && left === '0') count++;
    }
  }

  return count;
}