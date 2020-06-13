function twoSum(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] >= 0) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }
};

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

console.log(...twoSum([5, 6, 7, 9], 14));