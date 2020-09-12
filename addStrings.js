// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

// O(n) time
// O(n) space
const addStrings = (num1, num2) => {
  let num1Digits = num1.split('');
  let num2Digits = num2.split('');
  // queue implementation
  let result = [];

  let num1Idx = num1Digits.length - 1;
  let num2Idx = num2Digits.length - 1;
  
  let x1;
  let x2;
  let value;
  let carry = 0;

  while (num1Idx >= 0 || num2Idx >= 0) {
    x1 = num1Digits[num1Idx] ? +num1Digits[num1Idx] : 0;
    x2 = num2Digits[num2Idx] ? +num2Digits[num2Idx] : 0;
    value = (x1 + x2 + carry) % 10;
    carry = Math.floor((x1 + x2 + carry) / 10);

    result.unshift(value);

    num1Idx--;
    num2Idx--;
  }

  if (carry > 0) result.unshift(carry);
  return result.join('').toString();
} 
