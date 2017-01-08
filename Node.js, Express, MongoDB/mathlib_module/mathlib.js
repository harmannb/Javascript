module.exports = function() {
  return{
    add: function(num1, num2){
      console.log("the sum is:", num1 + num2);
    },
    multiply: function(num1, num2){
      console.log("the result is:", num1 * num2);
    },
    square: function(num) {
      console.log("the square root is:", num*num)
    }
  }
}();
