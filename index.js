let homeScore = 0
let awayScore = 0
document.getElementById('home-score').innerHTML
document.getElementById('away-score').innerHTML


// Change home score

function homeScore1() {
    element = document.getElementById("home-score");
    let newHomeScore = homeScore + 1
    homeScore = newHomeScore
    element.innerHTML = homeScore;
    console.log("Crimson Tide score! +1")
}

function homeScore2() {
    element = document.getElementById("home-score");
    let newHomeScore = homeScore + 2
    homeScore = newHomeScore
    element.innerHTML = homeScore;
    console.log("Crimson Tide score! +2")
}

function homeScore3() {
    element = document.getElementById("home-score");
    let newHomeScore = homeScore + 3
    homeScore = newHomeScore
    element.innerHTML = homeScore;
    console.log("Crimson Tide score! +3")
}


// Change away score

function awayScore1() {
    element = document.getElementById("away-score");
    let newAwayScore = awayScore + 1
    awayScore = newAwayScore
    element.innerHTML = awayScore;
    console.log("Away team score +1, boo!")
}

function awayScore2() {
    element = document.getElementById("away-score");
    let newAwayScore = awayScore + 2
    awayScore = newAwayScore
    element.innerHTML = awayScore;
    console.log("Away team score +2, boo!")
}

function awayScore3() {
    element = document.getElementById("away-score");
    let newAwayScore = awayScore + 3
    awayScore = newAwayScore
    element.innerHTML = awayScore;
    console.log("Away team score +3, boo!")
}


// Bottom buttons

function newGame() {
    homeScore = 0
    awayScore = 0
    
    element = document.getElementById("home-score");
    element.innerHTML = homeScore;

    element = document.getElementById("away-score");
    element.innerHTML = awayScore;

    console.log("New game!")
}