let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = [];
var soundBlue = new Audio("sounds/blue.mp3");
var soundGreen = new Audio("sounds/green.mp3");
var soundRed = new Audio("sounds/red.mp3");
var soundYellow = new Audio("sounds/yellow.mp3");
var soundWrong = new Audio("sounds/wrong.mp3");

var userChosenColour = "";
let userClickedPattern  = [];

var level = 0;



function playColorSound(whatColor){
    switch(whatColor) {
        case "red":     soundRed.play();      break;
        case "blue":    soundBlue.play();     break;
        case "green":   soundGreen.play();    break;
        case "yellow":  soundYellow.play();   break;
        default:
            console.log("Somthing is wrong");
    }

}




function nextSequence(){
    randomNumber = Math.floor(Math.random()*4); // generate a new random number between 0 and 3
    console.log(randomNumber);

    randomColor = buttonColours[randomNumber];
    console.log(randomColor);

    playColorSound(randomColor);
    $("#"+randomColor).fadeOut(100).fadeIn(100);
    
    gamePattern.push(randomColor);
    console.log(gamePattern);

    level++;
    $('h1')[0].innerText = "Level " + level;
    
    console.log(level);

    //return randomColor;
    
}


document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
  var keyCode = e.key;
  console.log(keyCode);
  if ($('h1')[0].innerText == "Press A Key to Start") {
      $('h1')[0].innerText = "Level 0";
      nextSequence();
    }
  

}


$('[type="button"]').click(function(){
    var myID = this.id;

    userChosenColour = myID;
    console.log(userChosenColour);
    userClickedPattern.push(myID);
    console.log(userClickedPattern);
    playColorSound(myID);


    $("#"+myID).addClass('pressed');

    setTimeout(function() {
        $("#"+myID).removeClass('pressed');
    }, 100);

  });