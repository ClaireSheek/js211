//class that represents a vehicle
  //should have a type property (plane, train, boat, bus)
  // a name property
  //a property that holds a list of crew onboard the vehicle

class Vehicle {
  constructor(name, type){
    this.name = name    //should have a name
    this.type = type    //should have a type property (plane, train, boat, bus)
    this.crew = []      //should have a property that holds a list of crew onboard the vehicle
  }

  //vehicle class should have a ready() method that should return true
  ready(){
    this.crew.forEach(function(person) {  //loops through the vehicles crew list to make sure it has the correct crew to depart.
        if((person.title == "Pilot" && person.vehicle.type == "Plane") ||
          (person.title == "Driver" && person.vehicle.type == "Bus") ||
          (person.title == "Captain" && person.vehicle.type == "Boat")||
          (person.title == "Conductor" && person.vehicle.type == "Train"))
        {
          console.log(`${person.name}, the ${person.title}, is on the ${person.vehicle.type}.`)
          console.log(`The ${person.vehicle.type} is ready to depart!`)
          return true
        } else {
          return false
        }
      })
  }

}
  
  
//class that represents a crew member:  
class CrewMember {
  constructor(name, title){
    this.name = name      //should have a name
    this.title = title    //should have a title/job (pilot, driver, captain)
    this.vehicle = null   //vehicle starts out null but calling the board method should update it to be the vehicle they are currently in
  }

  //crewmember class should have a method called board(vehicle)
    //when you call the board method it updates the crewmemebers "vehicle" property and ALSO the vehicle's crewList 
  board(vehicle){
    this.vehicle = vehicle
    plane.crew.push(this)
  }

}


  
  
    //tests
  
    let plane = new Vehicle("B123", "Plane");
    let boat = new Vehicle("USS Grant", "Boat");
    let train = new Vehicle("Polar Express", "Train");
    let bus = new Vehicle("Greyhound", "Bus");
  
    plane.ready() // should be false
    boat.ready() // should be false
  
    let john = new CrewMember("John", "Pilot");
    let jack = new CrewMember("Jack", "Captain");
    let josh = new CrewMember("Josh", "Driver");
    let jeni = new CrewMember("Jeni", "Conductor");
  
    john.board(plane);
    jeni.board(boat);
    josh.board(boat);

    plane.ready();  //should be true
    boat.ready(); //should be false

    jack.board(boat); // should be true!
