



$(document).ready(function() {
  $("#game").submit(function(event) {

  var input = parseInt($("#input").val());
  var numbers = [];

  for (var num = 1; num <= input; num++)
    if (num % 15 === 0) {
       numbers.push("pingpong");
    } else if (num % 5 === 0) {
      numbers.push("pong");
    } else if (num % 3 === 0) {
      numbers.push("ping");
    } else {
      numbers.push(num);
    }
      console.log(numbers);

	var newArray = numbers.map(function(num) {

    console.log("a")
  });
  event.preventDefault();
  });
});
