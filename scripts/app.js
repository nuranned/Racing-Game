console.log("filelinked");

$(document).ready(function(){

let $jellyfish = $('#jellyfish');
let $turtle = $('#turtle');

$(document).keypress(function(e){
    if (e.key === "t") {
      $turtle.animate({
        left: '+=50px'
      });
    } else if (e.key === "j") {
        $jellyfish.animate({
          left: '+=25px'
        });
    }
  })
  let positionOne = $($jellyfish).position();
  let positionTwo = $($turtle).position();


    if ((positionOne.left + $($jellyfish).width()) >= $(document).width()) {

      $('h1').text('Jellyfish Wins!!!');
    }

  if ((positionTwo.left + $($turtle).width()) >= $(document).width()) {
    $('h1').text('Turtle Wins!!!');
}

})
