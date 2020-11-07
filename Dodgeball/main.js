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
class person {
  constructor (id, name, age, skillset, placeborn){

  }
}

//This class will take in People from the arrOfPeople and create new dodgeBall Player objects that will be pushed to the array listOfPlayers.
class dodgeBallPlayer {
  constructor(name){
    this.name = name
    this.team = null
    this.canThrowBall = true
    this.canDodgeBall = true
    this.hasPaid = true
    this.isHealthy = true
    this.yearsExperience = true
  }

  addPlayer(){
    listOfPlayers.push(this)
    console.log(listOfPlayers)
  }
}

// This class will add a dodgeBallPlayers into the blueTeam array, and assign a teamMascot and teamColor
class blueTeammate extends dodgeBallPlayer{
  constructor(name, team){
    super(name, team);
    this.mascot = "Blue Jays";
    this.teamColor = "Blue"
  }

  addToTeam(){
    this.team = "blue"
    blueTeam.push(this)
    console.log(this)
  }
}

// This class will add a dodgeBallPlayers into the blueTeam array, and assign a teamMascot and teamColor
class redTeammate extends dodgeBallPlayer {
  constructor(name){
    super(name);
    this.mascot = "Red Wings";
    this.teamColor = "Red"
  }

  addToTeam(){
    redTeam.push(this)
  }
}


//This function displays the list of available people (arrOfPeople) on the DOM as well as buttons to make them a dodgeBallPlayer
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person)} ) //I figure I only need their name to be passed on if their other traits are already displayed
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - Age: " + person.age + " - Special skills: " + person.skillSet))
    listElement.append(li)
  })
}

//this function should create a new dodgeBallPlayer object and push them to arrOfPeople when the "Make Player" button is pressed
const makePlayer = (person) => {
  console.log(`${person.name} was clicked!`)
  person.name = new dodgeBallPlayer(person.name)
  person.name.addPlayer()
  listPlayerChoices()
}

//This function displays the list of players on the DOM as well as buttons to assign them to a team
const listPlayerChoices = () => {
  const listElement = document.getElementById('players')
  listElement.innerHTML = '' //resets the html so it doesn't keep stacking the iterations of the array every time a new player is added.
  listOfPlayers.map(player => {
    const li = document.createElement("li")
    //creates a button that adds the player to the team list and updates the team lists
    const blueButton = document.createElement("button")
    blueButton.innerHTML = "Blue Team"
    blueButton.addEventListener('click', function() {assignToBlue(player)})
    const redButton = document.createElement("button")
    redButton.innerHTML = "Red Team"
    redButton.addEventListener('click', function() {assignToRed(player.name)}, listRedTeam())

    li.appendChild(document.createTextNode(player.name))
    li.appendChild(blueButton)    
    li.appendChild(redButton)
    listElement.append(li)
  })
}

//this function should assign the "blueTeammate" class to the player which will push them to the blueTeam array when the "Blue Team" button is pressed
const assignToBlue = (player) => {
  console.log(`${player.name} should be added to Blue!`)
  if(player.team == "red" || player.team == "blue"){
    return
    } else {
    player.name = new blueTeammate(player.name)
    player.name.addToTeam()
    listBlueTeam()
  }
}

//this function should assign the "redTeammate" class to the player which will push them to the redTeam array when the "Red Team" button is pressed
const assignToRed = (name) => {
  console.log(`${name} should be added to Red!`)
  name = new redTeammate(name)
  name.addToTeam()
  listRedTeam()
}

//This function displays the list of blueTeam players
const listBlueTeam = () => {
  const listElement = document.getElementById('blue')
  listElement.innerHTML = '' //resets the html so it doesn't keep stacking the iterations of the array every time a new player is added.
    blueTeam.map(player => {
    const li = document.createElement("li")
    // would remove players from team and add them back to the listOfPlayers
    // const button = document.createElement("button")
    // button.innerHTML = "Remove from team"
    // button.addEventListener('click', function() {makePlayer(player.id)} )
    // li.appendChild(button)
    li.appendChild(document.createTextNode(player.name))
    listElement.append(li)
  })
}

//This function displays the list of redTeam players
const listRedTeam = () => {
  const listElement = document.getElementById('red')
  listElement.innerHTML = '' //resets the html so it doesn't keep stacking the iterations of the array every time a new player is added.
    redTeam.map(player => {
    const li = document.createElement("li")
    // would remove players from team and add them back to the listOfPlayers
    // const button = document.createElement("button")
    // button.innerHTML = "Remove from team"
    // button.addEventListener('click', function() {makePlayer(player.id)} )
    // li.appendChild(button)
    li.appendChild(document.createTextNode(player.name))
    listElement.append(li)
  })
}