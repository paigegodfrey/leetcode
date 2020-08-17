// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// O(N) time
// O(N) space
function validParentheses(str) {
  if (!str.length) return true;
  if (str.length % 2 !== 0) return false;

  let hash = { ')': '(', '}': '{', ']': '[' }
  let stack = [];
  stack.push(str[0]);

  for (let i = 1; i < str.length; i++) {
    if (stack.length && stack[stack.length - 1] === hash[str[i]]) stack.pop();
    else stack.push(str[i]);
  }

  return stack.length ? false : true;
}