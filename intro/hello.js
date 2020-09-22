//Class #1

// console.log("hello World");

//string
// let name = `Claire`

//number
// let age = 28;

//boolean
let isTall = true;

//array
let favoriteFood = ["pineapple", "pizza", "ice cream"];

//function
let speak = function () {
  console.log("Hi, how are you?")
}

//undefined
let favoriteThing;

//null (explicitly set to an empty value)
let networth = null;

//json = java script object notation
let address = {
  "street": "123 Main St",
  "city": "Austin",
  "state": "TX",
  "zip": 78787
}

// a string plus anything will become a concatenation i.e. 5 + "7" = "57"

// parsing string to interger
let age = "13";
let ageNum = parseInt(age);
let agePlus = ageNum + 2;

console.log("age in 2 years =", agePlus)

// ^ If you gave it something else in place of a number ("13"), like "bob" - it would still have to spit back a number, so it would come back as NaN (not a number)

// **Concatenation (sp?)
let name = "Claire";
let offer = "12 years";
let car = "Toyota";

let letter = "Hi " + name + ", we think this " + car + " is the best car for the next " + offer + "!";
console.log(letter)

//OR

let letter2 = "Hi ${name}, we think this ${car} is the best car for the next ${offer}?";
console.log(letter2)


//***Date  (complex object)
//started 1970 at midnight in England (UTC, Greenwhich, Big Ben!) - Computers store it in miliseconds!

let now = new Date(); //sets the time to time RIGHT NOW

console.log(now.getTime())


//***functions:

//defining
function hello (){
  console.log("Hello!");
}
//executing/invoking
hello();


//defining
let hello2 = function(){
  console.log("Hi There!");
}
//executing
hello2();

//defining
let hello3 = () => {
  console.log("Howdy, New Function Syntax!")
}
//executing/calling/invoking
hello3();

//shortcut for short-hand of above:
let hello4 = () => console.log("Howdy, New Function Syntax**");
//invoke
hello4();

