function generateBoard(whiteQueen, blackQueen) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      // if((i == whiteQueen[0] && j == whiteQueen[1]) || (i == blackQueen[0] && j == blackQueen[1])) {
      //   board[i][j] = 1;
      // }
      if(i == whiteQueen[0] && j == whiteQueen[1]) board[i][j] = 1;
      if(i == blackQueen[0] && j == blackQueen[1]) board[i][j] = 1;
    }
  }
  return board;
}


function queenThreat(board) {
  
  let queenIsInThreat = false;
  let queenPostion1, queenPosition2;
  const queen = 1;

  //find position of queens
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === queen) {
        if(queenPostion1 === undefined) {
          queenPostion1 = [i,j]
        } else {
          queenPosition2 = [i,j]
        }
      }
    }
  }

  //three conditions to test
  //1. if on the same horizontal axis
  //2. if on the same vertical axis
  //3. slightly trickier part - if on the same diagonal axis
  if(queenPostion1[1] === queenPosition2[1] ||
     queenPostion1[0] === queenPosition2[0] ||
     Math.abs(queenPostion1[0] - queenPosition2[0]) === Math.abs(queenPostion1[1] - queenPosition2[1])
  ) queenIsInThreat = true;

  return queenIsInThreat;
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));