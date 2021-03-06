
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

//the list of players will be populated with people from arrOfPeople
const listOfPlayers = [] 

// will be populated when choosing teams
const blueTeam = [] 

// will be populated when choosing teams
const redTeam = []

//This class will allow the creation of a new person (arrOfPeople)
// class person {
//   constructor (id, name, age, skillset, placeborn){

//   }
// }

//This class will take in People from the arrOfPeople and create new Player objects that will be pushed to the array listOfPlayers.
class Player {
  constructor(name, id){
    this.name = name
    this.id = id
    this.team = null
  }

  //adds the player to the player Array
  addPlayer(){
    listOfPlayers.push(this)
  }

  //removes the player from the player array and unhides the player from the list of people.
  removePlayer(){
    document.getElementById(this.id).style.display = "block"
    let index = listOfPlayers.indexOf(this)
    listOfPlayers.splice(index)

  }
}

// This class will add a Players into the blueTeam array, and assign a teamMascot and teamColor
class Teammate extends Player{
  constructor(name, id, team){
    super(name, id, team);
    this.team = team
  }

  // adds players to the blueTeam array and assigns a team mascot
  addToBlue(){
    blueTeam.push(this)
    this.mascot = "Blue Jays";
  }
// adds players to the redTeam and assigns a team mascot
  addToRed(){
    redTeam.push(this)
    this.mascot = "Red Wings";
  }
// removes players from the redTeam:
  removeFromRed(){
    // remove from the player from the DOM
    document.getElementById(this.id+"red").remove()
    //find the index of the player in the redTeam Array
    let index = redTeam.indexOf(this)
    //remove from the team's array
    redTeam.splice(index)
    //unhide the player from the Player list so they can be reassigned
    document.getElementById(this.id+"player").style.display = "block"
    //removes their team mascot
    this.mascot = null
    console.log("the redTeam is now: ", redTeam)
  }

  removeFromBlue(){
    // remove from the player from the DOM
    document.getElementById(this.id+"blue").remove()
    //find the index of the player in the blueTeam Array
    let index = blueTeam.indexOf(this)
    //remove from the team's array
    blueTeam.splice(index)
    //unhide the player from the Player list so they can be reassigned
    document.getElementById(this.id+"player").style.display = "block"
    //removes their team mascot
    this.mascot = null
    console.log("the blueTeam is now: ", blueTeam)
  }
}


//This function displays the list of available people (arrOfPeople) on the DOM as well as buttons to make them a Player
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  listElement.innerHTML = '' //resets the HTML element so it doesn't duplicate upon multiple clicks
  arrOfPeople.map(person => {
    const li = document.createElement("li")

    li.id = person.id
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person)})
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - Age: " + person.age + " - Special skills: " + person.skillSet))
    listElement.append(li)
  })
  document.getElementById('listPeopleButton').remove()
}

//this function should create a new Player object and push them to arrOfPeople when the "Make Player" button is pressed
const makePlayer = (player) => {
  document.getElementById(player.id).style.display = "none"
  console.log(`${player.name} was clicked!`)
  player = new Player(player.name, player.id)
  player.addPlayer()
  listPlayerChoices()
}

//This function displays the list of players on the DOM as well as buttons to assign them to a team
const listPlayerChoices = () => {
  const listElement = document.getElementById('players')
  listElement.innerHTML = '' //resets the html so it doesn't keep stacking the iterations of the array every time a new player is added.
  listOfPlayers.map(player => {
    const li = document.createElement("li")
    li.id = player.id+"player"
    //creates a button that adds the player to the team list and updates the team lists
    const blueButton = document.createElement("button")
    blueButton.innerHTML = "Blue Team"
    blueButton.addEventListener('click', function() {assignToBlue(player, blue)})
    const redButton = document.createElement("button")
    redButton.innerHTML = "Red Team"
    redButton.addEventListener('click', function() {assignToRed(player)}, listRedTeam())
    //creates a button that removes the player from the list and adds them back to the people list
    const removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener('click', function() {removePlayer(player)})

    li.appendChild(document.createTextNode(player.name))
    li.appendChild(blueButton)    
    li.appendChild(redButton)
    li.appendChild(removeButton)
    listElement.append(li)
  })
}

//this function removes the player from the listOfPlayers array and removes the previously created li
const removePlayer = (player) =>{
  player.removePlayer()
  document.getElementById(player.id+"player").remove()
}


//this function should assign the "blueTeammate" class to the player which will push them to the blueTeam array when the "Blue Team" button is pressed
const assignToBlue = (player) => {
  console.log(`${player.name} should be added to Blue!`)
  if(player.team == "red" || player.team == "blue"){
    return
    } else {
    document.getElementById(player.id+"player").style.display = "none"
    player = new Teammate(player.name, player.id, "blue")
    // player = new blueTeammate(player.name, player.team, player.id)
    player.addToBlue()
    listBlueTeam()
    console.log(`${player.name}'s team is now: ${player.team}`)
  }
}

//this function should assign the "redTeammate" class to the player which will push them to the redTeam array when the "Red Team" button is pressed
const assignToRed = (player) => {
  console.log(`${player.name} should be added to Red!`)
  if(player.team == "red" || player.team == "red"){
    return
    } else {
    document.getElementById(player.id+"player").style.display = "none"
    player = new Teammate(player.name, player.id, "red")
    player.addToRed()
    listRedTeam()
  }
}

//This function displays the list of blueTeam players
const listBlueTeam = () => {
  const listElement = document.getElementById('blue')
  listElement.innerHTML = '' //resets the html so it doesn't keep stacking the iterations of the array every time a new player is added.
    blueTeam.map(player => {
  
    const li = document.createElement("li")
    li.id = player.id+"blue"
    // remove players from team and add unhide them in the Player List
    const button = document.createElement("button")
    button.innerHTML = "Remove from team"
    button.addEventListener('click', function() {unassign(player)})
    li.appendChild(document.createTextNode(player.name))
    li.appendChild(button)
    listElement.append(li)
  })
}

//This function displays the list of redTeam players
const listRedTeam = () => {
  const listElement = document.getElementById('red')
  listElement.innerHTML = '' //resets the html so it doesn't keep stacking the iterations of the array every time a new player is added.
    redTeam.map(player => {
  
    const li = document.createElement("li")
    li.id = player.id+"red"
    // remove players from team and add unhide them in the Player List
    const button = document.createElement("button")
    button.innerHTML = "Remove from team"
    button.addEventListener('click', function() {unassign(player)})
    li.appendChild(document.createTextNode(player.name))
    li.appendChild(button)
    listElement.append(li)
  })
}

//unassign players from teams and put them back in the player pool:
const unassign = (player) => {
  // document.getElementById(player.id+"player").style.display = "block"
  if(player.team == "blue"){
    player.removeFromBlue()
  } else {
    player.removeFromRed()
  }
}

removePlayer


//TESTS: **walk through of functionality from webpage perspective, starting at onLoad.
// Would check that makePlayer() is working
  //if listOfPlayers.length = 0, makePlayer(player) should change it to listOfPlayer.length = 1
  //
  //I'm not sure how I could check the DOM but I would check that the li for the player is being created and appended to the ul

//Would check that the 

