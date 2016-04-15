function pingPong(input) {

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
    return numbers;
  
};

//////////////////////////////////////////////////

  $(document).ready(function() {

  $("h1").hide().fadeIn(2900).addClass("heada");

  $("#game").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#input").val());
    var output = pingPong(input);  
    console.log(output);

    output.forEach(function(x){
    $('#list').append("<li>" + x + "</li>");
  });

    $("button").hide();
    $("input").hide();
    $("#back").show();

  });

});



