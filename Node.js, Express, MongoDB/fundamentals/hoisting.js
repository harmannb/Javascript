awesome();
function awesome(){
  console.log("too good too be true")
}

                         // JS rearranges your code before running it
function awesome() {     // the function floated to the top!
  console.log("too good to be true");
}
awesome();               // so now awesome is defined before we invoke it!



varFunction = function() {
  console.log("How will this get hoisted?")
}
varFunction();
var varFunction;
