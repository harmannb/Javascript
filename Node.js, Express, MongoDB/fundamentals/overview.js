var myarr = [1,5,25,125,42];
for (var index in myarr){
  console.log(index*5);
}

var myobject ={
  language: "Javascript",
  dojo: "Washington DC",
  favorite_instructor: "Minh"
}

for (var i = 0; i < myarr.length; i++){
  console.log(myarr[i]*5);
  console.log("the right ways");
}

// Object.keys(myobject).forEach(function(key,value){
//   console.log(key, value, myobject[key]);
// })

for (var key in myobject){
  console.log(key, myobject[key] + "the value");
}
