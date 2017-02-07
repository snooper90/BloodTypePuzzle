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


function assignAllelePositions() {
  for( let i = 0; i < gameBoard.length; i++ ){
    for (let j = 0; j < gameBoard[i].length; j ++){
      // if space is not supposed to be empty assign it a, b or o
      if(gameBoard[i][j] !== "x"){
        let randomNumber = Math.floor(Math.random() * 2);
        let randomAllele;
        switch (randomNumber) {
          case 0:
            randomAllele = "a"
            break;
          case 1:
            randomAllele = "b"
            break;
          default:
            randomAllele = "o"
        }
        gameBoard[i][j] = randomAllele;
      }
    }
  }
}

//  Fisher-Yates Shuffle
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
