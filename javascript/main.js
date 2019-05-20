// Creates all possible letters the computer could choose from an array
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

// Win, Lose 
var wins = 0; 
var losses = 0;
var guesses = 10;

var computerChoice = alphabet [Math.floor(Math.random() * alphabet.length)];
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  var userGuess = event.key;

  // Random computer guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if(userChoice === computerChoice) {
      wins++;
  }else{
      guesses--;
  }
  if(guesses === 0) {
      losses++
  }
  }
    document.getElementById("userchoice-text").innerText = "You chose: " + userChoice;
    document.getElementById("computerchoice-text").innerText = "Computer chose: " + computerChoice;
    document.getElementById("wins").innerText = "Wins: " + wins;
    document.getElementById("losses").innerText = "losses: " + losses;
    document.getElementById("guesses").innerText = "Guesses left: " + guesses;

