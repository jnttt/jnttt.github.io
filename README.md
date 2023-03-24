# jnttt.github.io
week 6 project high or low game

A numbers game where the player guesses whether the next number will be higher or lower than the current number. 
Numbers range from 0-9. 
Players must choose difficulty level:
Easy mode: 10 in a row to win
Medium mode: 25 in a row to win
Hard mode: 50 in a row to win
Choosing the wrong option will refresh the page and restart the game.

Inspired by Gameboy Harvest Moon: Friends of Mineral Town 
This was part of a game from my childhood.

Code Snippet
function high() {
  if (numArr[1] >= numArr[0] === true) {
    numArr.shift();
    document.getElementById("number").innerHTML = numArr[0];
    score += 1;
    document.getElementById("score").innerHTML = "Score: " + score;
    if (numArr.length === 1) {
      alert("You win!!!");
      document.getElementById("h1").innerHTML = "YOU WIN!";
    }
  } else if (numArr[1] >= numArr[0] === false && numArr.length > 1) {
    alert("You lose...");
    window.location.reload();
  }
}
