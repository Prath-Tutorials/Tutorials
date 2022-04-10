let buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern  = [];
var soundBlue = new Audio("sounds/blue.mp3");
var soundGreen = new Audio("sounds/green.mp3");
var soundRed = new Audio("sounds/red.mp3");
var soundYellow = new Audio("sounds/yellow.mp3");
var soundWrong = new Audio("sounds/wrong.mp3");



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
    userClickedPattern  = []
    randomNumber = Math.floor(Math.random()*4); // generate a new random number between 0 and 3
    //console.log(randomNumber);

    randomColor = buttonColours[randomNumber];
    //console.log(randomColor);

    playColorSound(randomColor);
    $("#"+randomColor).fadeOut(100).fadeIn(100);
    
    gamePattern.push(randomColor);
    //console.log("gamePattern | "+gamePattern);

    level++;
    $('h1')[0].innerText = "Level " + level;
    
    //console.log(level);

    //return randomColor;
    
}


document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
  var keyCode = e.key;
  //console.log(keyCode);
  if ($('h1')[0].innerText == "Press A Key to Start" || $('h1')[0].innerText == "Game Over, Press Any Key to Restart") {
      $('h1')[0].innerText = "Level 0";
      startOver();
      setTimeout(function () {
          startOver();
        nextSequence();
       
    }, 1000);
      
    }
  

}



function checkAnswer(currentLevel){
    //console.log("userClickedPattern | "+userClickedPattern[currentLevel]);
    //console.log("gamePattern | "+gamePattern[currentLevel]);


    //console.log("userClickedPattern.length | "+userClickedPattern.length);
    //console.log("gamePattern.length | "+gamePattern.length);

    
        if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){

            if (userClickedPattern.length === gamePattern.length){
                
                setTimeout(function () {
                    nextSequence();
                   
                }, 1000);
            }

            //console.log("success");
        } else{
            soundWrong.play()
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");
      
            setTimeout(function () {
              $("body").removeClass("game-over");
            }, 200);
      
            startOver();
        }
     

}


$('[type="button"]').click(function(){
    var myID = this.id;

    if ($('h1')[0].innerText == "Press A Key to Start" || $('h1')[0].innerText == "Game Over, Press Any Key to Restart")  {
        // Game has not started
        
    } else {
        
        userClickedPattern.push(myID);
        //console.log("userClickedPattern | "+userClickedPattern);
        playColorSound(myID);


        $("#"+myID).addClass('pressed');

        setTimeout(function() {
            $("#"+myID).removeClass('pressed');
        }, 100);

        //console.log("myID | "+myID);
        //console.log("userClickedPattern[0] | "+userClickedPattern[0]);
    
    
        //console.log("level" + level);
        
    
        checkAnswer(userClickedPattern.length-1);

    }




  });


  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  