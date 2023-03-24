const numArr = [];
let score = 0;
const difficulty = document.getElementById("difficulty");
const hide = document.getElementById("hide");
let h1 = document.getElementById("h1");

function easy() {
  for (let i = 0; i < 11; i++) {
    numArr.push(Math.floor(Math.random() * 10));
  }
  hide.style.display = "none";
  difficulty.style.display = "none";
  console.log(numArr);
  document.getElementById("number").innerHTML = numArr[0];
}
function med() {
  for (let i = 0; i < 26; i++) {
    numArr.push(Math.floor(Math.random() * 10));
  }
  hide.style.display = "none";
  difficulty.style.display = "none";
  console.log(numArr);
  document.getElementById("number").innerHTML = numArr[0];
}
function hard() {
  for (let i = 0; i < 51; i++) {
    numArr.push(Math.floor(Math.random() * 10));
  }
  hide.style.display = "none";
  difficulty.style.display = "none";
  console.log(numArr);
  document.getElementById("number").innerHTML = numArr[0];
}
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
function low() {
  if (numArr[1] <= numArr[0] === true) {
    numArr.shift();
    document.getElementById("number").innerHTML = numArr[0];
    score += 1;
    document.getElementById("score").innerHTML = "Score: " + score;
    if (numArr.length === 1) {
      alert("You win!!!");
      document.getElementById("h1").innerHTML = "YOU WIN!";
    }
  } else if (numArr[1] <= numArr[0] === false && numArr.length > 1) {
    alert("You lose...");
    window.location.reload();
  }
}
function restart() {
  window.location.reload();
}
