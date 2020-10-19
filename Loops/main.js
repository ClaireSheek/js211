// 1. Use a do...while loop to console.log the numbers from 1 to 1000.
let myNum = '';
let i = 0;

do {
  i = i + 1;
  myNum = myNum + i + " ";
} while (i < 1000);

console.log(myNum);


// 2. Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}
// 3. Create a function that logs out the keys of the object using Object.keys().
let logKeys = Object.keys(person)
console.log(logKeys) 
    // or just console.log(Object.keys(person))

// 4. Create a function that logs out the keys and values of the object using Object.entries().
let logInfo = Object.entries(person)
console.log(logInfo)

// 5. Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
let arrayOfPersons = [
  {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
},
{
  firstName: "John",
  lastName: "Doe",
  birthDate: "Aug 18, 1932",
  gender: "male"
},
{
  firstName: "Jen",
  lastName: "Doe",
  birthDate: "Oct 23, 1995",
  gender: "female"
}
]


// 6. Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
// let findBirthday = () => {
// }
 for (let person of arrayOfPersons) {
  let birthYear = person.birthDate.substr(-4);
  if (birthYear % 2 == 1){
    console.log(person.birthDate)
  }
}

// 7. Use .map() to map over the arrayOfPersons and console.log() their information.

let userInfo = arrayOfPersons.map(person => {
  console.log(person)
})


// 8. Use .filter() to filter the persons array and console.log only males in the array.
let onlyTheGuys = arrayOfPersons.filter(person => person.gender == "male")
console.log("The men are:", onlyTheGuys)

// 9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.
let checkBirthdays = arrayOfPersons.map(person => {
  let birthYear = person.birthDate.substr(-4);
    if (birthYear < 1990){
      return true;
    } else {
      return false;
    }
})
console.log(checkBirthdays)


// 10. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
let beforeDate = arrayOfPersons.filter(checkBirthdays)


// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// BONUS - .filter() out the people in the array who are younger than 21.