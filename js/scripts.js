$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var decimal = parseInt($("#decimal").val());
    $("#binary").text(convert(decimal));
  });
});

//BACK END
var convert = function(decimal) {
  var array = [];
  var counter = 0;
  //first number
  while(counter < decimal) {
    if (array.length === 0){
      array.push(1);
      counter++;
    } else if(array[array.length -1] === 0) {
      array[array.length -1] = 1;
      counter++;
    } else if(allNumbersAreOne(array)) {
      for(var i = 0; i < array.length; i++) {
        array[i] = 0;
      }
      array.unshift(1);
      counter++;
    }
  }
  var binary = array.join("");
  return binary;
}


var allNumbersAreOne = function(array) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      return false;
    }
  }
  return true;
}
