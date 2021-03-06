"use strict"
class BloodTypePuzzle {
  constructor(){
    //Currently hardcoded to be 5x5
    this.emptyPositions =  [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4 ];
    this.gameBoard = [
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','','']
    ];
    this.bloodTypesRow = [];
    this.bloodTypesCol = [];
    this.createGameSession()
  }

  createGameSession(){
    // Fill with the steps to create the finished board
    this.insertEmptyPositions(this.emptyPositions)
    this.assignAllelePositions()
    this.findBloodTypes()
  }

  insertEmptyPositions(positions) {
    // Save possible empty positions in a shuffled array
    let unusedEmptyPositions = this.shuffle(positions.slice());
    // Assign two empty positions per row
    for( let i = 0; i < this.gameBoard.length; i++ ){
      for (let j = 0; j < 2; j ++){
        // If space is already empty reshuffle the positions
        while (this.gameBoard[i][unusedEmptyPositions[0]] === "x"){
          if (i === 4){
            console.log("Impossible board configuration. \nResetting board and trying again");
            this.gameBoard = [
              ['','','','',''],
              ['','','','',''],
              ['','','','',''],
              ['','','','',''],
              ['','','','','']
            ];
            this.insertEmptyPositions(emptyPositions)
            return
          }
          unusedEmptyPositions = this.shuffle(unusedEmptyPositions);
        }
        let index = unusedEmptyPositions.shift();
        // Assign next empty position to the column of current row
        this.gameBoard[i][index] = "x";
      }
    }
  }

  assignAllelePositions() {
    for( let i = 0; i < this.gameBoard.length; i++ ){
      for (let j = 0; j < this.gameBoard[i].length; j ++){
        // if space is not supposed to be empty assign it a, b or o
        if(this.gameBoard[i][j] !== "x"){
          let randomNumber = Math.floor(Math.random() * 3);
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
          this.gameBoard[i][j] = randomAllele;
        }
      }
    }
  }

  //  Fisher-Yates Shuffle
  shuffle(array) {
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

  findBloodTypes(){
    let bloodTypeCol = [];
    let bloodTypeRow = [];
    // Get the arrays
    for(let i = 0; i < this.gameBoard.length; i++){
      for(let j = 0; j < this.gameBoard.length; j++){
        if(this.gameBoard[i][j] !== "x"){
          // will add left to right
          bloodTypeRow.push(this.gameBoard[i][j])
        };
        if(this.gameBoard[j][i] !== "x"){
          // will add top to bottom
          bloodTypeCol.push(this.gameBoard[j][i])
        };
      };
    };
    this.bloodTypesRow = this.splitBloodtypes(bloodTypeRow);
    this.bloodTypesCol = this.splitBloodtypes(bloodTypeCol);
  }

  splitBloodtypes(arr){
    let bloodTypes = [[],[],[],[],[]];
    for( let i = 0; i < this.gameBoard.length; i++ ){
      let subArr = arr.splice(0, 3);
      let firstBloodType = this.findBloodtype(subArr[0], subArr[1])
      let secondBloodType = this.findBloodtype(subArr[1], subArr[2])
      bloodTypes[i] = [firstBloodType, secondBloodType]
    };
    return bloodTypes
  }

  findBloodtype(a, b){
    if((a === "a" && b === "a") || (a === "o" && b === "a") || (a === "a" && b === "o")){
      return "A"
    }else if((a === "a" && b === "b") || (a === "b" && b === "a")){
      return "AB"
    }else if((a === "b" && b === "b") || (a === "o" && b === "b") || (a === "b" && b === "o")){
      return "B"
    }else{
      return "O"
    }
  }
}

let puzzle = new BloodTypePuzzle();

module.exports = puzzle
