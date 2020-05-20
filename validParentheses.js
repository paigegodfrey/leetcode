function isValid(s) {
  if (s.length % 2 !== 0) return false;

  let mapping = {
    "(": ")", 
    "{": "}", 
    "[": "]"
  }
  let stack = [];

  for(let i = 0; i < s.length; i++) {
    if(s[i] in mapping) stack.push(s[i]);
    if(s[i] === mapping[stack[stack.length - 1]]) stack.pop();
  }
  
  if(stack.length === 0) return true;
  return false;
};