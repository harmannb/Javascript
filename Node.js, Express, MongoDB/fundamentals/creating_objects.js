function VehicleConstructor(name, numberOfWheels, numberOfPassengers){
  var vehicle = {};

  vehicle.name = name
  vehicle.numberOfWheels = numberOfWheels
  vehicle.numberOfPassengers = numberOfPassengers

  vehicle.makeNoise = function(){
    console.log("Ring Ring")
  }

  return vehicle;
}

var Bike = VehicleConstructor("bike", 2, 1)
Bike.makeNoise();

var Sedan = VehicleConstructor("sedan", 4, 7)

Sedan.makeNoise = function() {
  console.log("Honk Honk")
}

Sedan.makeNoise();

var Bus = VehicleConstructor("bus", 4, 20)

Bus.pickUpPassengers = function(number){
  this.numberOfPassengers += number
}

Bus.pickUpPassengers(4);

console.log(Bus.numberOfPassengers);

