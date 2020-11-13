//Function to search by liquor type
const liquorSearch = () => {
  let userInput = document.getElementById('userInput')
  let liquor = userInput.value
  let resultArray = []
  console.log(liquor)
  let fetchPromise = fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + liquor);
  let responsePromise = fetchPromise.then(function(response){
    console.log(response)
    return response.json();
  })
  responsePromise.then(function(json){
    json.drinks.forEach(function(liquor){
      resultArray.push(liquor)
    }) 
    console.log(resultArray)
    displayResults(resultArray)
  }) 
}

const displayResults = (resultArray) => {
  const resultList = document.getElementById('results')
  resultList.innerHTML= ""; //resest list
  resultArray.map(drinkResult => {
    const li = document.createElement('li')
    li.id = drinkResult.idDrink
    //create a button to view recipe
    const button = document.createElement('button')
    button.innerHTML = "View Recipe"
    button.addEventListener('click', function() {viewRecipe(drinkResult)})
    
    li.appendChild(document.createTextNode(drinkResult.strDrink))
    li.appendChild(button)
    resultList.append(li)
  })
}

const viewRecipe = (drink) => {

  let drinkName = drink.strDrink
  let fetchPromise = fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName);
  let responsePromise = fetchPromise.then(function(response){
    // console.log(response)
    return response.json();
  })
  responsePromise.then(function(json){
    json.drinks.forEach(function(drink){
      console.log("the drink is: ", drink)
      console.log("the first ingredient is: ", drink.strIngredient1)

  const recipeItem = document.getElementById(drink.idDrink)
  const recipeBox = document.createElement("div")
  recipeBox.innerHTML=""
  console.log(drink)
  let template = viewRecipeTemplate(drink)
  console.log(template)
  recipeBox.innerHTML=template
  // recipeBox.appendChild(document.createTextNode("Ingredients: " + drink.strIngredient1 + "," + drink.strIngredient2))
  // recipeBox.appendChild(document.createTextNode("Instructions: " + drink.strInstructions))

  recipeItem.append(recipeBox) 
  // drink.map(index)
    })
  })
}




const viewRecipeTemplate = (drink) => {
  // let listOfIngredients.
  //strIngredient
  let ingredientList = []
  for (const [key, value] of Object.entries(drink)){
    if(value == null){
      continue
    }
    if(key.includes("strIngredient")){
      ingredientList.push("<li>" + value + "</li>")
    } 
  }

let ingredientHTML = 
  `<div>
    <ul>Ingredients
       ${ingredientList.join(" ")}
    </ul>
    <h3>Instructions</h3>
    <p> ${drink.strInstructions} </p>
  </div>
  ` 
  return ingredientHTML
}


