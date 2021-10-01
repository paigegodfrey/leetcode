// 26. Remove Duplicates from Sorted Array

// O(1) space
// O(n) time
const removeDuplicates = nums => {
  if (nums.length < 2) return nums;

  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[k]) nums[i] = "_";
    else {
      k++;
      if (nums[k] === "_" && nums[i] !== "_") [nums[k], nums[i]] = [nums[i], nums[k]];
    }
  }
  return k + 1;
}