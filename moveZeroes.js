// 283. Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// O(n) time
// O(1) space
const moveZeroes = nums => {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (lastNonZero < i) {
        nums[lastNonZero] = nums[i];
        nums[i] = 0;
      }
      lastNonZero++;
    }
  }

  return nums;
}