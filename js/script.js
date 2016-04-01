$(function() {

$("#pingpong").click(function(){
  pingpong();
});

function pingpong() {
  var userInput = parseInt(prompt("Pick a number!"));
  var numbers = []

  for (var i = 1; i < userInput.length; i++) {
    numbers.push();
  }
    numbers.forEach(function(x) {
      if (x % 3 === 0) {
      return "ping";
    } else if (x % 5 === 0) {
      return "pong";
    } else if (x % 15 === 0) {
      return "pingpong";
    } else {
      return number[x]

    }
});

  alert(pingpong);
}
});
