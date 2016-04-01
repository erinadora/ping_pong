$(document).ready(function() {
  $("h1").hide().fadeIn(2900).addClass("heada");


  $("#game").submit(function(event) {
    $("button").hide();
    $("input").hide();
    $("#back").show();

  var input = parseInt($("#input").val());
  var numbers = [];

  for (var num = 1; num <= input; num++) {
    if (num % 15 === 0) {
      numbers.push("pingpong");
    } else if (num % 5 === 0) {
      numbers.push("pong");
    } else if (num % 3 === 0) {
      numbers.push("ping");
    } else {
      numbers.push(num);
    }
  }
  var items = document.getElementById("list")
  for (var i = 0; i < numbers.length; i++ ) {
      var item = document.createElement("li");
      item.innerHTML = numbers[i];
      items.appendChild(item);;
      }

    event.preventDefault();
  });
});
