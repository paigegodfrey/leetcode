// 53. Maximum Subarray
//
// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// O(N) time
// O(1) space
function maxSubArray(arr) {
  if (!arr.length) return;

  let currentSum = arr[0];
  let maxSum = currentSum;

  for(let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}


