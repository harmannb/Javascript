// var ninja = 'Libby';
// setTimeout( function (){ console.log(ninja); }, 2000 );
// console.log(ninja);

// // output is Libby printed out twice seperated by two seconds

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';

// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );

// console.log("Printing ninja value.");
// console.log(ninja, "NOW");

// var a = 2;
// var b = function() { console.log("something"); };

// function doSomething(x) {
//   console.log(typeof(x));
// }

// doSomething(a);
// doSomething(b);


function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting" + pasta + "pasta in the water");

  var sauce = makeSauce();
  console.log("Pasta is done.");
  return pasta + "Pasta Voila";
}

function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}

function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}


console.log(makePasta("Penne", makePesto));

console.log(makePasta("Farfalle", makeAlfredo));
