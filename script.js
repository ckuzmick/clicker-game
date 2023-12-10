var score = 0;
var scoreDiv = document.getElementById("score");
var clickIncrement = 1;
var autoIncrement = 0;
var autoIncrementCost = 10;
var clickIncrementCost = 10;

function clicker() {
    score += clickIncrement;
    console.log(score)
}

function auto() {
    score += autoIncrement;
    console.log(score)
}

function upgradeClick() {
    if (score >= clickIncrementCost) {
        score -= clickIncrementCost;
        clickIncrementCost *= 1.1;
        clickIncrement += 2;
    }
}

function upgradeAuto() {
    if (score >= autoIncrementCost) {
        score -= autoIncrementCost;
        autoIncrementCost *= 1.1;
        autoIncrement += 0.01;
    }
}

function update() {
    scoreDiv.innerHTML = Math.floor(score);

    if (score >= clickIncrementCost) {
        document.getElementById("upgrade-clicker").style.color = "black";
    } else {
        document.getElementById("upgrade-clicker").style.color = "grey";
    
    }

    if (score >= autoIncrementCost) {
        document.getElementById("upgrade-auto").style.color = "black";
    } else {
        document.getElementById("upgrade-auto").style.color = "grey";   
    }
}

setInterval(update, 10);
setInterval(auto, 10);