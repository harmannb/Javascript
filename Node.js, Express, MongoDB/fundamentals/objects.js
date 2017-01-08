var array = [ function(){console.log('hello there');} ]
// invoke the function
array[0]();

var object = { helloFunc: function(){console.log('hello there');} }

var dojo = {};                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // access object properties with dot (.) notation
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
dojo.number_of_students = 40;                  // we can reassign any of the properties
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";             // note that we can change this from integer to string
dojo.phone_number = 1234567890 ;


var myShortPrimeNumberArray = [2,3,5,7];

var myDonut = {
  frosting: 'glazed',
  type: 'old fashioned',
}

var glazedDonuts = [
  {
    frosting: 'glazed',
    type: 'old fashioned',
    age: '45',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    type: 'regular',
    age: '5',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    type: 'jelly filled',
    age: '1',
    time: 'seconds'
  }
];


var purchase;
//You
if(glazedDonuts[0].age < 25 && (glazedDonuts[0].time == 'seconds' || glazedDonuts[0].time == 'minutes')){
  //shop owner
  purchase = glazedDonuts[0];
}
else {
  console.log('sorry its been out a bit longer');
}
