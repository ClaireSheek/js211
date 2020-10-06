'use strict'

console.log("loading up js file!")

//when add buttos is clicked

//read what the input has, and add that to our UL


//When the li is clicked, add a line-through decoration by adding 'done' class

//get the add button
let addButton = document.getElementById('addButton');

//attach an on click enent listener
addButton.addEventListener('click', function(){
  console.log("the button got clicked")
  let input = document.getElementById('input');
  let userItem = input.value;

  console.log("the item = ", userItem);

  //get the ul from the dom
  let ul = document.getElementById('items');

  //create an li
  let li = document.createElement("li");

  //add userItem to text of li
  li.innerText = userItem;

  //attatch the li to the dom
  ul.appendChild(li);

  //clear input
  input.value = null;

  //add cllick listener to li
  li.addEventListener('click', function(){
    console.log("the li was clicked")
    if ( li.className == 'done'){
      li.className = ' ';
    } else {
      li.className = 'done';
    }
  })

})




