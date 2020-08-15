// helper function
// creates board in solved state
function solveBoard(board) {
  // define board parameters
  let solved = [];
  let rows = board.length;
  let cols = board[0].length;

  // fill in numbers from 0 to (rows * cols) - 1 and return solved board
  for (let r = 0; r < rows; r++) {
    solved.push(Array.from({ length: cols }, (v, i) => i + (cols * r)));
  }

  return solved;
}

// helper function
// checks if board1 matches board2, in dimensions and order
function boardsMatch(board1, board2) {
  return JSON.stringify(board1) === JSON.stringify(board2);
}

// helper function
// creates deep copy of board, for use in makeMove
function copyBoard(board) {
  let boardDeepCopy = [];

  for (let r = 0; r < board.length; r++) {
    boardDeepCopy.push([]);
    for (let c = 0; c < board[r].length; c++) {
      boardDeepCopy[r].push(board[r][c]);
    }
  }

  return boardDeepCopy;
}

// returns a new board from moving a number
// from position board[row][col] to board[newRow][newCol]
function makeMove(board, row, col, newRow, newCol) {
  let numRows = board.length;
  let numCols = board[0].length;

  // return null if invalid coordinates
  if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
    return null;
  }

  let newBoard = copyBoard(board);
  [newBoard[row][col], newBoard[newRow][newCol]] = [newBoard[newRow][newCol], newBoard[row][col]];
  return newBoard;
}

// helper function
// returns array containing next possible boards
// considers all possible moves
function getNextBoards(board) {
  let nextBoardVersions = [];
  let zeroRowIdx;
  let zeroColIdx;

  for (let r = 0; r < board.length; r++) {
    if (board[r].includes(0)) {
      zeroRowIdx = r;
      break;
    }
  }

  for (let c = 0; c < board[zeroRowIdx].length; c++) {
    if (board[zeroRowIdx][c] === 0) {
      zeroColIdx = c;
      break;
    }
  }

  nextBoardVersions.push(makeMove(board, zeroRowIdx, zeroColIdx, zeroRowIdx + 1, zeroColIdx));
  nextBoardVersions.push(makeMove(board, zeroRowIdx, zeroColIdx, zeroRowIdx - 1, zeroColIdx));
  nextBoardVersions.push(makeMove(board, zeroRowIdx, zeroColIdx, zeroRowIdx, zeroColIdx + 1));
  nextBoardVersions.push(makeMove(board, zeroRowIdx, zeroColIdx, zeroRowIdx, zeroColIdx - 1));

  return nextBoardVersions;
}


// uses BFS to traverse puzzle
// returns min number of moves to solve puzzle
// O(N * N!) time where N is the board, with dimensions rows * cols
// O(N * N!) space where N is the board, with dimensions rows * cols
function slidingPuzzle(board) {
  let queue = [];
  let visited = {};
  let numMoves = 0;
  let currentBoard;
  let nextBoardVersions;
  let solution = solveBoard(board);

  queue.push({ board, numMoves });
  visited[board] = true;

  while (queue.length) {
    currentBoard = queue.shift();
    if (boardsMatch(currentBoard[board], solution)) {
      return currentBoard[numMoves];
    }

    // generate next board versions
    // add unvisited board versions to visited and queue
    nextBoardVersions = getNextBoards(currentBoard[board]);
    for (let nextBoard of nextBoardVersions) {
      if (nextBoard && !visited[nextBoard]) {
        visited[nextBoard] = true;
        queue.push(
          {
            board: nextBoard,
            numMoves: currentBoard[numMoves++]
          }
        )
      }
    }
  }
  return -1;
}
