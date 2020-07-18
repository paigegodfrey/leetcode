// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// O(n) time
// O(n) space
function twoSum(nums, target) {
  let hash = {};
  let num;
  let match;

  for (let i = 0; i < nums.length; i++) {
    num = nums[i];
    match = target - num;
    if (hash[match] >= 0) return [hash[match], i];
    if (!hash[num]) hash[num] = i;
  }
};

console.log(...twoSum([5, 6, 7, 9], 14));