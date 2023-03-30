//user input scissors paper stone
//if user input not SPS, input validation
//else computer generate SPS
//SPS = 0,1,2 respectively
//if input == scissors && com paper
//win
//if input == paper && com stone
//win
//if input == stone && com scissors
//win
//else lose
var gameMode = "blankSlate";
var userScore = 0;
var computerScore = 0;
var drawScore = 0;
var username = "";

var main = function (input) {
  // Generate a random dice number
  var computerSelection = rollDice();
  //Assignment of numbers to SPS roll
  console.log(computerSelection);
  //input validation
  if (gameMode == "blankSlate") {
    gameMode = "getUsernameSlate";
    return "Please enter username:";
  } else if (gameMode == "getUsernameSlate") {
    username = input;
    gameMode = "gameStartSlate";
    return (
      "Hello " +
      username +
      " Please enter one of the following: 'scissors', 'paper', or 'stone'"
    );
  } else if (gameMode == "gameStartSlate") {
    if (input != "scissors" && input != "paper" && input != "stone") {
      return "There are only 3 input options. Please try again";
    }
    //SPS vs bot winner
    else if (
      (input == "scissors" && computerSelection == "paper") ||
      (input == "paper" && computerSelection == "stone") ||
      (input == "stone" && computerSelection == "scissors")
    ) {
      userScore += 1;
      myOutputValue =
        "The computer chose " +
        computerSelection +
        "<br>" +
        "You chose " +
        input +
        "<br>" +
        "You Win" +
        "<br>" +
        "Now you can type 'scissors' 'paper' or 'stone' to play another round!" +
        "<br>" +
        "User score:" +
        userScore +
        "<br>" +
        "Computer score:" +
        computerScore +
        "<br>" +
        "Draw score:" +
        drawScore;
    } else if (input == computerSelection) {
      drawScore += 1;
      myOutputValue =
        "The computer chose " +
        computerSelection +
        "<br>" +
        "You chose " +
        input +
        "<br>" +
        "It is a draw" +
        "<br>" +
        "Now you can type 'scissors' 'paper' or 'stone' to play another round!" +
        "<br>" +
        "User score:" +
        userScore +
        "<br>" +
        "Computer score:" +
        computerScore +
        "<br>" +
        "Draw score:" +
        drawScore;
    }
    //SPS vs bot loser
    else {
      computerScore += 1;
      myOutputValue =
        "The computer chose " +
        computerSelection +
        "<br>" +
        "You chose " +
        input +
        "<br>" +
        "You lose" +
        "<br>" +
        "Now you can type 'scissors' 'paper' or 'stone' to play another round!" +
        "<br>" +
        "User score:" +
        userScore +
        "<br>" +
        "Computer score:" +
        computerScore +
        "<br>" +
        "Draw score:" +
        drawScore;
    }
    // Return output.
    return myOutputValue;
  }
};

var rollDice = function () {
  //to generate number from 0 to 2
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    return "scissors";
  } else if (randomInteger == 1) {
    return "paper";
  } else {
    return "stone";
  }
};
