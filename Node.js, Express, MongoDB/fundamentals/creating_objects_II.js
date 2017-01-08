function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed){

  var distance_travelled = 0;

  var updateDistanceTravelled = function() {
    this.distance_travelled += speed;
  }


  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numberOfPassengers = numberOfPassengers;
  this.speed = speed;

  this.makeNoise = function(){
    console.log("Ring Ring");
  }

  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  }

  this.checkMiles = function(){
    console.log(distance_travelled);
  }
}




var Bike = VehicleConstructor("bike", 2, 1);

Bike.makeNoise();
Bike.move();

var Sedan = VehicleConstructor("sedan", 4, 7);

Sedan.makeNoise = function(){
  console.log("Honk Honk");
}

Sedan.makeNoise();

var Bus = VehicleConstructor("bus", 4, 20);

Bus.pickUpPassengers = function(number){
  this.numberOfPassengers += number;
}

Bus.pickUpPassengers(4);

console.log(Bus.numberOfPassengers);
