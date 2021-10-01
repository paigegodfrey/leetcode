// 13. Roman to Integer

// O(1) space
// O(n) time
const romanToInt = roman => {
  let mapping = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let num = mapping[roman[0]];

  for (let i = 1; i < roman.length; i++) {
    let char = roman[i];
    let priorChar = roman[i - 1];

    num += mapping[char];
    if (priorChar === 'I' && (char === 'V' || char === 'X')) {
      num -= mapping[priorChar] * 2;
    }
    if (priorChar === 'X' && (char === 'L' || char === 'C')) {
      num -= mapping[priorChar] * 2;
    }
    if (priorChar === 'C' && (char === 'D' || char === 'M')) {
      num -= mapping[priorChar] * 2;
    }
  }

  return num;
}