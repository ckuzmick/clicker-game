var score = 0;
var scoreDiv = document.getElementById("score");
var clickIncrement = 1;
var autoIncrement = 0;

function clicker() {
    score += clickIncrement;
    console.log(score)
}

function auto() {
    score += autoIncrement;
    console.log(score)
}

function upgradeClick() {
    clickIncrement += 2;
}

function upgradeAuto() {
    autoIncrement += 0.01;
}

function update() {
    scoreDiv.innerHTML = Math.floor(score);
}

setInterval(update, 10);
setInterval(auto, 10);