// Created By: Jacob Bonner
// Created On: January 2021
// This program finds and prints all 3 by 3 magic number sets that add to 15.

// This function prints a magic square should one be found
function printSquare(printList) {
  // Printing a magic square
  console.log(printList[0] + " " + printList[1] + " " + printList[2]);
  console.log(printList[3] + " " + printList[4] + " " + printList[5]);
  console.log(printList[6] + " " + printList[7] + " " + printList[8]);
  console.log("*****");
}

// This function finds and prints all 3 by 3 magic number sets that add to 15.
function solveSquares(numberList, indexList, index) {
  // This loop itterates to fill out a square of numbers
  for (let counter = 0; counter < numberList.length; counter++) {
    // Checking if a slot in the square has been occupied
    if (indexList[counter] == 0) {
      numberList[counter] = index;
      indexList[counter] = 1;

      // Checking if the index is less than nine
      if (index < 9) {
        // Calling function again to continue creating square
        solveSquares(numberList, indexList, index + 1);
      } else {
        // Checking if every linear combination of three numbers adds to 15
        if (isSquareMagic(numberList) == true) {
          // Printing out the square that was found
          printSquare(numberList);
        }
      }

      // Reseting part of the square to 0 so it can be filled again
      indexList[counter] = 0;
    }
  }
}

// This function determines whether or not a square is a magic square
function isSquareMagic(squareList) {
  // Performing math that determines the sum of array number combinations
  let firstRow = squareList[0] + squareList[1] + squareList[2];
  let secondRow = squareList[3] + squareList[4] + squareList[5];
  let thirdRow = squareList[6] + squareList[7] + squareList[8];
  let firstColumn = squareList[0] + squareList[3] + squareList[6];
  let secondColumn = squareList[1] + squareList[4] + squareList[7];
  let thirdColumn = squareList[2] + squareList[5] + squareList[8];
  let firstDiagonal = squareList[0] + squareList[4] + squareList[8];
  let secondDiagonal = squareList[2] + squareList[4] + squareList[6];

  // If statement that finds whether or not the numbers form a magic square
  if (firstRow == 15 && secondRow == 15 && thirdRow == 15
      && firstColumn == 15 && secondColumn == 15 && thirdColumn == 15
      && firstDiagonal == 15 && secondDiagonal == 15) {
    return true;
  } else {
    return false;
  }
}

// Initializing the list that will be used in determining the magic squares
let firstList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let secondList = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Printing the inital dividing line
console.log("*****");

// Calling the function that will solve the magic squares
solveSquares(firstList, secondList, 1);
