'use strict';

const pigLatinTranslator = () => {
  let input = document.getElementById('userInput'); //targeting the 'input' box
  let userString = input.value;

  //split ups multiple words
  let words = userString.split(" ");

const translateArray = (word, index, words) => {
    word = word.trim().toLowerCase();
    //create a list of vowels
    const vowelList = ["a", "e", "i", "o", "u"];
    //create a variable to hold the index of the first vowel
    let vowelIndex = 0;

    //check to see if first letter is a vowel
    if (vowelList.includes(word[0])){
      words[index] = word + "yay";
    } else {
      //if not, find and index the first vowel
      for (let char of word) {
        if (vowelList.includes(char)){
        vowelIndex = word.indexOf(char);  
        break;
        }
      }
      //split, re-order and add "ay" to the end
      words[index] = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
    }
}

words.forEach(translateArray);

words = words.toString();
let finalTranslation = words.replace(",", " ");
document.getElementById('translatedWord').innerText = finalTranslation;
console.log(words)
console.log(finalTranslation)

}


//target the translate button
let translateButton = document.getElementById('translateButton'); 

//adding an on click function to the button to run the user's word through the pigLatinTranslator function
translateButton.addEventListener('click', pigLatinTranslator)


//MY TO-DO LIST:
// if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words
