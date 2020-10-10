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
  let popPiece = startStack.pop();    //removes the last item in the startStack array
  console.log("The moving piece is: ", popPiece);
  let newStack = endStack.push(popPiece);  // and places it onto the endStack
  newStack = endStack
  console.log(endStack)

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  let movingPiece = startStack[startStack.length-1];  // Defines what block will be moved
  let attemptedPlacement = endStack[endStack.length-1]; // Defines what block it's attempting to be placed on
 if (attemptedPlacement === undefined || movingPiece < attemptedPlacement){   // Check if the stack is empty, and compares the size of the two blocks
    console.log("Legal: ", movingPiece, "can be placed on ", attemptedPlacement)
   return true;
 } else {
   console.log("Illegal: ", movingPiece, "can't be placed on", attemptedPlacement)
      return false;
 }

}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  let checkStackB = stacks.b.toString() 
  let checkStackC = stacks.c.toString()

 if(checkStackB == '4,3,2,1' || checkStackC == '4,3,2,1'){ 
   console.log("Winner winner, chicken dinner!")
   return true
 } else {
   return false
 }

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack) === true){
    movePiece(startStack, endStack)
  } else{
    console.log("try again")
  }
  if (checkForWin() === true) {
    console.log("We have a winner!")
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