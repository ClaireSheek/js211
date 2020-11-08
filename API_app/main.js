const ginDrinks = () => {

  let fetchPromise = fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin');
  let responsePromise = fetchPromise.then(function(response){
    console.log(response)
    return response.json();
  })
  responsePromise.then(function(json){
    json.drinks.forEach(function(drink){
      console.log(drink)

    })
  })
}

// ginDrinks()


// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

const drinkSearch = () => {
  let userInput = document.getElementById('userInput')
  let drink = userInput.value
  let resultArray = []
  console.log(drink)
  let fetchPromise = fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink);
  let responsePromise = fetchPromise.then(function(response){
    console.log(response)
    return response.json();
  })
  responsePromise.then(function(json){
    json.drinks.forEach(function(drink){
      resultArray.push(drink)
      // console.log(resultArray)
    }) 
    console.log(resultArray)
    displayResults(resultArray)
  }) 
}

const displayResults = (resultArray) => {
  const resultList = document.getElementById('results')
  resultArray.map(drink => {
    const li = document.createElement('li')
    li.id = drink.idDrink
    //create a button to view recipe
    const button = document.createElement('button')
    button.innerHTML = "View Recipe"
    button.addEventListener('click', function() {viewRecipe(drink)})
    
    li.appendChild(document.createTextNode(drink.strDrink))
    li.appendChild(button)
    resultList.append(li)
  })
}

const viewRecipe = (drink) => {
  console.log(drink)
  let recipeItem = document.getElementById(drink.idDrink)
  const recipeBox = document.createElement("div")
  recipeBox.appendChild(document.createTextNode("Ingredients: " + drink.strIngredient1 + ", " + drink.strIngredient2))
  recipeBox.appendChild(document.createTextNode("Instructions: " + drink.strInstructions))

  recipeItem.append(recipeBox)
  // drink.map(index)
}
