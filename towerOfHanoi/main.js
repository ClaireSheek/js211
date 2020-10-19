'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
//This function should take in the starting and ending stacks and move the top piece from one to the other.

const movePiece = (startStack, endStack) => {
  let popPiece = stacks[startStack].pop();    //removes the last item in the startStack array
  // checks to make sure the correct piece was moving: console.log("The moving piece is: ", popPiece) 
  stacks[endStack].push(popPiece);  // and places it onto the endStack
}

// Before you move, should you check if the move is actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  let startingIndex = stacks[startStack].length-1;  // Finds the index of what block will be moved
  let endingIndex = stacks[endStack].length-1; // Finds the index of what block it's attempting to be placed on
  let movingPiece = stacks[startStack][startingIndex]; // Finds the numeric value at the defined index of startStart
  let attemptedPlacement = stacks[endStack][endingIndex]; // Finds the numeric value at the defined index of endArray
 if (attemptedPlacement === undefined || movingPiece < attemptedPlacement){   // Check if the stack is empty, and compares the values of the two numbers (aka: size of the two blocks)
  //if the stack is empty, or the movingPiece is less than the piece we're attempting to place it on: return true
    console.log("Legal: ", movingPiece, "can be placed on ", attemptedPlacement) 
   return true;
 } else {  // otherwise return false.
   console.log("Illegal: ", movingPiece, "can't be placed on", attemptedPlacement)
      return false;
 }

}

// Check to see if an stack besides A has all 4 pieces in the correct order.
const checkForWin = () => {
  let checkStackB = stacks.b.toString() //turns stack b into a string
  let checkStackC = stacks.c.toString() // turns stack a into a string
 if(checkStackB == '4,3,2,1' || checkStackC == '4,3,2,1'){   // checks stack a and b against the string '4,3,2,1' - if either are equal, return true, we have a winner!
   return true;
 } else {  // otherwise return false. No win.
   return false ;
 }

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack) === true){ // first check to see if they move is legal by calling our isLegal function
    movePiece(startStack, endStack) // if true, run movePiece
  } else{
    console.log("Sorry, you can't move that there, try again.") // if false, let the use know move is illegal.
  }
  if (checkForWin() === true) { //check for a win with checkForWin function!
    console.log("Winner winner, chicken dinner!") //if true, tell the player that they won!
  }
 } 

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
         a: [],   
         b: [4, 3, 2, 1], 
         c: [] 
      };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}