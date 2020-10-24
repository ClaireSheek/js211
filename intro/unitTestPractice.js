// // unit tests (towersOfHanoi)
// //mocha framework
//   // two functions that we need: Describe and It



// if(typeof = describe == 'function'){
//   /// in test mode. ie npm test

//   //describe
//   describe("basic functionality", function(){
//     //code to run the basic funtionality tests

//     it("should correctly move a piece", function(){
//       stacks = {
//         a: [4, 3, 2, 1],
//         b: [],
//         c: [],
//       };

//       movePiece('a, b')
      
//       //make sure size of a is 3
//       assert.equal(stacks.a.length, 3);
//       //make sure size of 
//       assert.equal(stacks.b.length, 1);
//       //make sure size of 
//       assert.equal(stacks.b.length, 0);
//       //make sure that element in position  0 of b is '1';
//       assert.equal(stacks.b[0], 1);

//     });

//     it("should correctly detect not a win", function(){
//       stacks = {
//         a: [4],
//         b: [3, 2, 1],
//         c: [],
//       };

//       let actual = checkForWin();
//       assert.equal(actual, false)

//     })

//     it("should correctly detect a win", function(){
//       stacks = {
//         a: [],
//         b: [4, 3, 2, 1],
//         c: [],
//       };

//       let actual = checkForWin();
//       assert.equal(actual, true)

//     });

//     it("should correctly detect a win", function(){
//       stacks = {
//         a: [],
//         b: []],
//         c: [4, 3, 2, 1,]
//       };

//       let actual = checkForWin();
//       assert.equal(actual, true)

//     })

//     it("should detect a simple legal move #1", function(){})

//     it("should detect a simple legal move #2", function(){})
//   };)

// } else {
//   // we're just running the game

//   getPrompt();
// }
