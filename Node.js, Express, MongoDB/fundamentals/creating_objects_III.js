function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed){

  var distance_travelled = 0;

  this.updateDistanceTravelled = function() {
    distance_travelled += speed;
  }

  this.checkMiles = function(){
    console.log(distance_travelled);
    return this;
  }

  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numberOfPassengers = numberOfPassengers;
  this.speed = speed;

  }

// function ends here

  VehicleConstructor.prototype.makeNoise = function(){
    console.log("Ring Ring");
    return this;
  }

  VehicleConstructor.prototype.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
  }


var Bike = new VehicleConstructor('bike', 2, 1, 5);
var Sedan = new VehicleConstructor('sedan', 4, 7, 20);
var Bus = new VehicleConstructor('bus', 4, 20, 15);

var numberOfPassengers = 0

Bus.pickUpPassengers = function(number){
  this.numberOfPassengers += number;
  return this;
}

Bus.pickUpPassengers(3).pickUpPassengers(2);
console.log(Bus);

Bike.makeNoise().move(10);
console.log(Bike);

Sedan.makeNoise();
console.log(Sedan);

