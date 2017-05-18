console.log("filelinked");

$(document).ready(function(){

let $jellyfish = $('#jellyfish');
let $turtle = $('#turtle');

$(document).keypress(function(e){
    if (e.key === "t") {
      $turtle.animate({
        left: '+=25px'
      });
    } else if (e.key === "j") {
        $jellyfish.animate({
          left: '+=50px'
        });
    }
})

let positionOne = $($jellyfish).position();
let positionTwo = $($turtle).position();


  // if ((positionOne.left + $($jellyfish).width()) >= $(document).width()) {

  //   $('h1').text('Jellyfish Wins!!!');

if ((positionTwo.left + $($turtle).width()) >= $(document).width()) {
  $('h1').text('Turtle Wins!!!');

}

// }
//
// })
// var positionOne = $($homerSimpson).position();
//           var positionTwo = $($peterGriffin).position();
//           if (positionOne.left + $($homerSimpson).width() >= trackWidth) {
//               $(document).off('keydown');
//               $('#container').append('<img id="dinner" src="imgs/winnerwinnerchickendinner.png"></img>');
//               $('h1').text('Homer Simpson Wins!!!!');
//               var audio = new Audio('media/burp.wav');
//               audio.play();
//               $('#reset').addClass('animated infinite pulse');
//               return;
//           }
//           if (positionTwo.left + $($peterGriffin).width() >= trackWidth) {
//               $(document).off('keydown');
//               $('#container').append('<img id="dinner" src="imgs/winnerwinnerchickendinner.png"></img>');
//               $('h1').text('Peter Griffin Wins!!!!');
//               var audio = new Audio('media/laugh.mp3');
//               audio.play();
//               $('#reset').addClass('animated infinite pulse');
//               return;
//           }
