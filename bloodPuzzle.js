
(function(){
  "use strict"

  // Hardcoded board for a 5 x 5
  let gameBoard = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
  ];
  const emptyPositions = [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4 ];



  function insertEmptyPositions(positions) {
    // Save possible empty positions in a shuffled array
    let unusedEmptyPositions = shuffle(positions.slice());
    // Assign two empty positions per row
    for( let i = 0; i < gameBoard.length; i++ ){
      for (let j = 0; j < 2; j ++){
        // If space is already empty reshuffle the positions
        while (gameBoard[i][unusedEmptyPositions[0]] === "x"){
          if (i === 4){
            console.log("Impossible board configuration. \nResetting board and trying again");
            gameBoard = gameBoard = [
              ['','','','',''],
              ['','','','',''],
              ['','','','',''],
              ['','','','',''],
              ['','','','','']
            ];
            insertEmptyPositions(emptyPositions)

            return
          }
          unusedEmptyPositions = shuffle(unusedEmptyPositions);
        }
        let index = unusedEmptyPositions.shift();
        // Assign next empty position to the column of current row
        gameBoard[i][index] = "x";
      }
    }
  }


  function assignAllelePositions() {
    for( let i = 0; i < gameBoard.length; i++ ){
      for (let j = 0; j < gameBoard[i].length; j ++){
        // if space is not supposed to be empty assign it a, b or o
        if(gameBoard[i][j] !== "x"){
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

  function findBloodTypes(){
    let bloodTypeCol = [];
    let bloodTypeRow = [];
    // Get the arrays
    for(let i = 0; i < gameBoard.length; i++){
      for(let j = 0; j < gameBoard.length; j++){

        if(gameBoard[i][j] !== "x"){
          // will add left to right
          bloodTypeRow.push(gameBoard[i][j])
        };
        if(gameBoard[j][i] !== "x"){
          // will add top to bottom
          bloodTypeCol.push(gameBoard[j][i])
        };
      };
    };
    let bloodTypesRow = splitBloodtypes(bloodTypeRow);
    let bloodTypesCol = splitBloodtypes(bloodTypeCol);
    console.log(bloodTypeCol);

  }

  function splitBloodtypes(arr){
    let bloodTypes = [[],[],[],[],[]];
    for( let i = 0; i < gameBoard.length; i++ ){
      let subArr = arr.splice(0, 3);
      let firstBloodType = findBloodtype(subArr[0], subArr[1])
      console.log("firstBloodType: " + firstBloodType);
      let secondBloodType = findBloodtype(subArr[1], subArr[2])
      bloodTypes[i] = [firstBloodType, secondBloodType]
    };
    console.log(bloodTypes);
    return bloodTypes
  }

  function findBloodtype(a, b){
    console.log("findBloodtype a & b : " + a + " " + b);
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

  insertEmptyPositions(emptyPositions);
  assignAllelePositions();
  findBloodTypes()




})()
