//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}

var _ = {
   map: function(arr, callback) {
    var newarr = [];
    for(var i = 0; i < arr.length; i++) {
      var value = callback(arr[i]);
      newarr.push(value);
      }
    return newarr;
    },

   reduce: function(arr, callback, memo) {
    for (var i = 0; i < arr.length; i++){
      memo = callback(memo, arr[i])
    }
    return memo;
   },

   find: function(arr, callback) {
    for (var i = 0; i < arr.length; i++){
      var value = callback(arr[i])
      if (value) {
        return arr[i];
      }
    }
   },

   filter: function(arr, callback) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
      var value = callback(arr[i]);
      if (value) {
        newarr.push(arr[i]);
      }
    }
    return newarr;
    },


   reject: function(arr, callback) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
      var value = callback(arr[i]);
      if (!value) {
        newarr.push(arr[i]);
      }
    }
    return newarr;
    }



// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// var reduced = _.reduce([1,2,3], function(memo, num){ return memo + num; }, 0);
// console.log(evens);
