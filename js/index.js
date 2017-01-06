'use strict';

/*
- If userInput != SimonArray then I need to either replay it or if strict is applied go back to step one. Have to make sure it compares every value one by one.
*/
//Initialize variables
var simonArray = [];
var userInputtedArray = [];
var count = 0;
var strictMode = false;
var greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

//Buttons
document.getElementById('green').addEventListener("click", function () {
  greenSound.play();
  userInputtedArray.push(1);
});
document.getElementById('red').addEventListener("click", function () {
  redSound.play();
  userInputtedArray.push(2);
});
document.getElementById('yellow').addEventListener("click", function () {
  yellowSound.play();
  userInputtedArray.push(3);
});
document.getElementById('blue').addEventListener("click", function () {
  blueSound.play();
  userInputtedArray.push(4);
});

//Button Controls, updating/resetting the counter
function updateCount() {
  count += 1;
  document.getElementById('count').innerHTML = count;
}
function resetCount() {
  count = 0;
  simonArray = [];
  userInputtedArray = [];
  document.getElementById('count').innerHTML = count;
}
//Game Logic

function initializeGame() {

  for (var i = 0; i <= count; i++) {
    simonArray.push(Math.floor(Math.random() * 4) + 1);
    console.log(simonArray);
  }
};

//Starting the Game
document.getElementById('start').addEventListener("click", function () {
  updateCount();
  initializeGame();
});
//Resetting the Game
document.getElementById('reset').addEventListener("click", function () {
  resetCount();
  strictMode = false;
  document.getElementById('strict').style.background = "";
});
//Enabling Strict Mode
document.getElementById('strict').addEventListener("click", function () {
  strictMode = true;
  document.getElementById('strict').style.background = "orange";
});