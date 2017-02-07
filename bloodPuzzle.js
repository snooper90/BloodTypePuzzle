"use strict"

// Hardcoded board for a 5 x 5
const gameBoard = [
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','',''],
  ['','','','','']
];
const emptyPositions = [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4 ];

function insertEmptyPositions(emptyPositions) {
  // Save possible empty positions in a shuffled array
  let unusedEmptyPositions = shuffle(emptyPositions);
  // Assign two empty positions per row
  for( let i = 0; i < gameBoard.length; i++ ){
    for (let j = 0; j < gameBoard.length - 3; j ++){
      let index = unusedEmptyPositions.shift();
        gameBoard[i][index] = "x";
    }
  }
}
