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

// O(n) time
// O(1) space
// where n = number of digits
const reverseInteger = x => {
  const isNegative = x < 0;
  if (isNegative) x = Math.abs(x);

  let reverse = 0;

  while (x > 0) {
    let pop = x % 10;
    x = Math.floor(x / 10);
    reverse = reverse * 10 + pop;
    console.log(reverse);

    // handle 32-bit integer limit
    if (reverse > 2 ** 31 - 1) return 0;
  }

  return isNegative ? reverse * -1 : reverse;
}