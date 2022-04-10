let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = [];
var soundBlue = new Audio("sounds/blue.mp3");
var soundGreen = new Audio("sounds/green.mp3");
var soundRed = new Audio("sounds/red.mp3");
var soundYellow = new Audio("sounds/yellow.mp3");
var soundWrong = new Audio("sounds/wrong.mp3");

var userChosenColour = "";
let userClickedPattern  = [];








function nextSequence(){
    randomNumber = Math.floor(Math.random()*4); // generate a new random number between 0 and 3
    console.log(randomNumber);
    return randomNumber;
    
}


randomChosenColour = buttonColours[nextSequence()];


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





gamePattern.push(randomChosenColour);

console.log(randomChosenColour);

console.log(gamePattern);

$("#"+randomChosenColour).fadeOut(300).fadeIn(300);







document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
  var keyCode = e.keyCode;

}


$('[type="button"]').click(function(){
    userChosenColour = this.id;
    console.log(userChosenColour);
    userClickedPattern.push(this.id);
    console.log(userClickedPattern);
    playColorSound(this.id);
  
  });