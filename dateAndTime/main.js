// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log('#1: the date is:', new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const userNumber = 7
const convertToString = userNumber.toString();
console.log('#2 converted number to string', convertToString)


// Write a JavaScript program to convert a string to the number.
const convertToNum = parseInt(`7`);
console.log('#3 converted string to number:', convertToNum)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
let myBool = false;
let myNull = null;
let myNum = 3;
let myNaN = NaN;
let myString = `Hello`;
let myUndefined

const isTypeOf = (data) => {
  return console.log(typeof data);
}

isTypeOf(myBool);
isTypeOf(myNull);
isTypeOf(myNum);
isTypeOf(myNaN);
isTypeOf(myString);
isTypeOf(myUndefined);
  
// Write a JavaScript program that adds 2 numbers together.
let firstNumber = 9;
let secondNumber = 3;

const addTwoNum = (num1, num2) => {
 return `${num1} + ${num2} =  num1 + num2`
}

addTwoNum(firstNumber, secondNumber)

// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.  
const isItTrue = (arg1, arg2) => {
  if (arg1 && arg1) {
    return "Both are TRUE"
  } else if (arg1 || arg2) {
    return "One of these is TRUE"
  } else 
    return "Neither is TRUE"
}
console.log(isItTrue(0, 2))


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24