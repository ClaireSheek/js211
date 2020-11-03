class Car {
  //fuel and OD start at empty
  currentFuel = 0;
  odometer = 0;

  constructor(id, mpg, tankSize){
    this.id = id;
    this.mpg = mpg;
    this.tankSize = tankSize
  }

  addFuel(gallons){
    //cannot take in negative gallons
    if (gallons < 0) {
      return
    }

    let emptySpace = this.tankSize - this.currentFuel;
      if(gallons >= emptySpace){
        this.currentFuel = this.tankSize;
      } else{
        this.currentFuel = this.currentFuel + gallons;
      } 
  }



  distanceToEmpty(){
    //should return the number of miles that the car can drive (based on currentFuel and mpg)
    return this.mpg*this.currentFuel;
  }

  drive(miles){
    //cannot drive negative miles
    if (miles < 0) {
      return
    }

    //sets the max travel distance allowed
    let maxDistance = this.distanceToEmpty();

    // let distanceTraveled = maxDistance < miles ? maxDistance : miles; 
  //short-hand ^^ of below
    let distanceTraveled;

    if (maxDistance < miles){
      distanceTraveled = maxDistance;
    } else {
      distanceTraveled = miles;
    } 
    

    let fuelUsed = distanceTraveled / this.mpg;

    this.currentFuel = this.currentFuel - fuelUsed;
    this.odometer = this.odometer + distanceTraveled;
  }
}

let toyota = new Car ('rav4', 30, 16);
console.log(toyota)


if(typeof describe == 'function'){
  const assert = require('assert');

  describe("constructor test", function(){
    it("should handle simple constructor", function(){

      let mazda = new Car("1234", 31, 13);
      assert.equal(mazda.id, "1234");
      assert.equal(mazda.mpg, 31);
      assert.equal(mazda.tankSize, 13);
      assert.equal(mazda.currentFuel, 0);
      assert.equal(mazda.odometer, 0);
    })
  })

  describe("adding fuel", function(){
    it("should partially fill the tank", function(){

      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(1);
      assert.equal(mazda.currentFuel, 1);

      mazda.addFuel(4);
      assert.equal(mazda.currentFuel, 5);
    })

    it("should not over fill the tank", function(){

      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(15);
      assert.equal(mazda.currentFuel, 13);
    })

    it("should not allow negative fuel", function(){

      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(10);
      mazda.addFuel(-3);
      assert.equal(mazda.currentFuel, 10);
    })

    it("should not over fill the tank #2", function(){

      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(10);
      mazda.addFuel(4);

      assert.equal(mazda.currentFuel, 13);
    })

    it("should allow filling to capacity in increments", function(){

      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(3);
      mazda.addFuel(2.5);
      mazda.addFuel(4.5);
      mazda.addFuel(1);
      mazda.addFuel(2);

      assert.equal(mazda.currentFuel, 13);
    })
  })

  describe("distance to empty", function(){
    it("when the car is full of gas", function(){

      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(1);
      assert.equal(mazda.distanceToEmpty(), 31);
    })

    it("when the car has no gas", function(){

      let mazda = new Car("1234", 31, 13);
      assert.equal(mazda.distanceToEmpty(), 0);
    })

    it("when the car tank is full", function(){

      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(13);
      assert.equal(mazda.distanceToEmpty(), 13*31);
    })

    it("when the car has some fractional gallons of gas", function(){
      let mazda = new Car("1234", 31, 13);
      mazda.addFuel(1.5);
      assert.equal(mazda.distanceToEmpty(), 46.5);  
    })
  })

  describe("the drive method", function(){


    it("shuld not drive if there is no gas", function(){
        let mazda = new Car("1234", 31, 13);
        mazda.drive(5);
        assert.equal(mazda.odometer,0);
    })

    it("shuld not be able to drive on fumes", function(){
        let mazda = new Car("1234", 31, 13);
        mazda.addFuel(10);
        mazda.drive(1000);
        assert.equal(mazda.odometer, 310);
        assert.equal(mazda.currentFuel, 0);
    })

    it("normal driving", function(){
        let mazda = new Car("1234", 31, 13);
        mazda.addFuel(10);
        mazda.drive(31);
        mazda.drive(62);
        mazda.drive(15.5);

        assert.equal(mazda.odometer, 108.5);
        assert.equal(mazda.currentFuel, 6.5);

    })
})

  


}


// // class Circle {

// //     radius;

// //     constructor(inpudRadius){
// //       this.radius = inputRadius;
// //     }

// //     //* This method return the circumference of THIS circle
// //     circumference(){
// //       return 2 * Math.PI *this.radius
// //     }

// //     //* This method return the area of THIS circle
// //     area(){
// //       return Math.PI * this.radius * this.radius;
// //     }

// // }

// //class that represents a vehicle
//   //should have a type property (plane, train, boat, etc)
//   // a name property
//   //a property that holds a list of crew onboard the vehicle

// class Vehicle {
//   constructor(name, type){
//     this.name = name
//     this.type = type
//     this.crew = []
//   }

//   addCrew(newMember){
//     if(this.skillset.length < 1){
//       this
//     }
//   }


// }

// ship.Vehicle("Ship Name")
// console.log(ship)
// //vehicle class should have a ready() method that should return true


// //class that represents a crew memmber
//   //should have a name
//   //should have a title/job (pilot, bus driver, boat)
//   //vehicle: start out null but calling the board nethod should update it to be the vehicle they are currently in
//     //when you call the board method it updates the crewmemebers "vehicle" property and ALSO the vehicle's crewList 

//   class CrewMember {
//   constructor(name, title){
//     this.name = name
//     this.title = title
//     this.vehicle = null
//   }

//   board(vehicle) {
//     if(this.title = captin){
//       this.vehicle = Ship;
//     } else if (this.title = pilot){
//       this.vehicle = Plane;
//     } else if (this.title = conductor){
//       this.vehicle = Train;
//     } else if (this.title = driver){
//       this.vehicle = Bus;
//     } else {
//       console.log("Sorry, we don't have a vehicle for you")
//     }
//   }


// }

//   //crewmember class should have a method called board(vehicle)


//   //using / testing the classes

//   let plane1 = new Vehicle("B123", "Plane");
//   let boat1 = new Vehicle("USS Grant", "Boat")

//   plane1.ready() // should be false
//   boat1.ready() // should be false

//   let john = new CrewMember("John", "Pilot");

//   john.board(p1);//lets John Board the Plane **TRICKY PART - passes in the entire vehicle (including array of crew members.. push *hint hint*)

//   p1.ready();  //should be true