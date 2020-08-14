// O(N) time
// O(1) space
function minSubArray(arr) {
  if (!arr.length) return;

  let currentSum = arr[0];
  let minSum = currentSum;

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.min(arr[i], currentSum + arr[i]);
    minSum = Math.min(minSum, currentSum);
  }
  return minSum;
}