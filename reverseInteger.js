// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// O(log(x)) time => due to overflow limit
// O(n) space
// assumes valid input
const reverse = num => {
  let digits = num.toString().split('');
  const limit = 2147483648;

  let left = digits[0] === '-' ? 1 : 0;
  let right = digits.length - 1;
  if (digits[right] === '0') {
    digits.pop();
    right--;
  }

  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  let output = +digits.join('');
  return Math.abs(output) < limit ? output : 0;
}