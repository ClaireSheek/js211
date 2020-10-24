//class that represents a vehicle
  //should have a type property (plane, train, boat, etc)
  // a name property
  //a property that holds a list of crew onboard the vehicle

  class Vehicle {
    constructor(name, type){
      this.name = name
      this.type = type
      this.crew = []
    }
  
    ready(){

    }
  
  
  }
  

  //vehicle class should have a ready() method that should return true
  
  
  //class that represents a crew memmber
    //should have a name
    //should have a title/job (pilot, bus driver, boat)
    //vehicle: start out null but calling the board nethod should update it to be the vehicle they are currently in
      //when you call the board method it updates the crewmemebers "vehicle" property and ALSO the vehicle's crewList 
    //crewmember class should have a method called board(vehicle)
  
    class CrewMember {
      constructor(name, title){
        this.name = name
        this.title = title
        this.vehicle = null
      }

    board(vehicle){
      
    }
    
  }
  

  
  
    //tests
  
    let plane1 = new Vehicle("B123", "Plane");
    let boat1 = new Vehicle("USS Grant", "Boat")
  
    plane1.ready() // should be false
    boat1.ready() // should be false
  
    let john = new CrewMember("John", "Pilot");
  
    john.board(p1);//lets John Board the Plane **TRICKY PART - passes in the entire vehicle (including array of crew members.. push *hint hint*)
  
    p1.ready();  //should be true