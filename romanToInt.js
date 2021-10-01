// 13. Roman to Integer

// O(1) space
// O(1) time => because roman numerals only go up to 3999
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

  let lastChar = roman[roman.length - 1];
  let num = mapping[lastChar];

  for (let i = roman.length - 2; i >= 0; i--) {
    let char = roman[i];
    let nextChar = roman[i + 1];

    if(mapping[char] < mapping[nextChar]) num -= mapping[char];
    else num += mapping[char];

  return num;
}