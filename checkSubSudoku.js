// sets solutionValues object with keys from 1 to matrixLength
// each key is set to a value of 1, indicating the frequency
function setSolution(solutionValues, matrixLength) {
  for (let key = 1; key <= matrixLength; key++) {
    solutionValues[key] = 1;
  }
  return solutionValues;
}

// O(n^2) time
// O(n) space
// where n is the length of the matrix
function checkSubSudoku(matrix) {
  let solutionValues = {};
  let matrixLength = matrix.length;
  let num;

  // check each row
  for (let row = 0; row < matrixLength; row++) {
    setSolution(solutionValues, matrixLength);
    for (let col = 0; col < matrix[row].length; col++) {
      num = matrix[row][col];
      if (!solutionValues[num] || --solutionValues[num] < 0) return 'INVALID';
    }
  }

  // check each column
  for (let row = 0; row < matrixLength; row++) {
    setSolution(solutionValues, matrixLength);
    for (let col = 0; col < matrix[row].length; col++) {
      num = matrix[col][row];
      console.log(num);
      if (!solutionValues[num] || --solutionValues[num] < 0) return 'INVALID';
    }
  }

  return 'VALID';
}