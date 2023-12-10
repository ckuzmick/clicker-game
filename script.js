var score = 1;
var scoreDiv = document.getElementById("score");

function clicker() {
    score++;
    scoreDiv.innerHTML = score;
    console.log(score)
}