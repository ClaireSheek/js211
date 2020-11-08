// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.


const myArray = ['mango', 'peach', 'rasbery', 'melon', 'strawberry', 'kiwi', 'pineapple', 'apple']

 const myMap = (array, func) => {
  let newarr = []
for(let index = 0; index <= array.length; index ++){
      newarr.push(func(array[index]))
    }
    return newarr
}


const addMore = (element) => {
 return "Eat a " + element
}

console.log(myMap(myArray, addMore))


// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

let amounts = [12, 82, 4, 31]

const myReduce = (array, func) => {
  let startingValue = 0
  for (let index = 0; index < array.length; index++) {
    let addOn = array[index]
    startingValue = func(startingValue, addOn)
  }
  return startingValue
}

const sumOf = (num1, num2) => {
  return num1 + num2
}

console.log(myReduce(amounts, sumOf))


// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.

const myFilter = (array, func) => {
  let newArr = []
  for (let index = 0; index < array.length; index++) {
    if(func(array[index])){
      newArr.push(array[index])
    } 
  } return newArr
}

const haveFiveLetters = (word) => {
  if (word.length <= 5){
    return true
  }
}

console.log(myFilter(myArray, haveFiveLetters))
