const numArr = [];
let score = 0;

function easy() {
  for (let i = 0; i < 11; i++) {
    numArr.push(Math.floor(Math.random() * 10));
  }

  console.log(numArr);
  document.getElementById("number").innerHTML = numArr[0];
}
function med() {
  for (let i = 0; i < 26; i++) {
    numArr.push(Math.floor(Math.random() * 10));
  }

  console.log(numArr);
  document.getElementById("number").innerHTML = numArr[0];
}
function hard() {
  for (let i = 0; i < 51; i++) {
    numArr.push(Math.floor(Math.random() * 10));
  }

  console.log(numArr);
  document.getElementById("number").innerHTML = numArr[0];
}
function high() {
  if (numArr[1] >= numArr[0] === true) {
    numArr.shift();
    document.getElementById("number").innerHTML = numArr[0];
    score += 1;
    document.getElementById("score").innerHTML = "Score:" + score;
  }
}
function low() {
  if (numArr[1] <= numArr[0] === true) {
    numArr.shift();
    document.getElementById("number").innerHTML = numArr[0];
    score += 1;
    document.getElementById("score").innerHTML = "Score:" + score;
  }
}
