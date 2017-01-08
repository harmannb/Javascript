var empty_array = [];
var string_array = ["hi", "these", "are", "strings"];
var x = 15;

console.log("Logging variables to the console", empty_array, string_array, x)

console.log('string_array has a length of', string_array.length);

string_array.push('awesome');      // adding a new value to the array
console.log(string_array);         // you'll note that string_array now has a new value called awesome
string_array.pop();                // removing the last value in the array
console.log(string_array);


// LENGTH
var arr = [3, 6];
arr[234] = "hi";
//
console.log( arr.length ); // 235
console.log( arr[34] ); // undefined


var arr = [3, 6];
arr[234] = "hi";
//
console.log( arr.length ); // 235
console.log( arr[34] ); // undefined
arr.length = 3;
console.log( arr[34] );
console.log( arr[234] );
console.log( arr.length );
arr.length = 500;
console.log( arr[234] );
console.log( arr.length );
