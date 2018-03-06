let name = prompt("Hi! Enter your name here:");

let user = document.getElementById("user-name");
if ((name !== '') && (name !== null)) {user.innerText = name};

document.getElementById("paper").addEventListener("click", playPaper);
document.getElementById("rock").addEventListener("click", playRock);
document.getElementById("scissors").addEventListener("click", playScissors);

let userPoints = 0;
let compPoints = 0;
let options = ['paper', 'scissors', 'rock'];
let compChoice;

function userWins() {
    userPoints += 1;
    document.getElementById("user-points").innerHTML = userPoints;
    document.getElementById("comment").innerHTML = "Point for you!";
    theEnd();
};

function compWins() {
    compPoints += 1;
    document.getElementById("comp-points").innerHTML = compPoints;
    document.getElementById("comment").innerHTML = "Point for computer!";
    theEnd();
}

function playPaper() { 
    document.getElementById("user-choice").innerHTML = 'paper';
    compChoice = options[Math.floor(Math.random()*options.length)];
    if (compChoice === 'scissors') {
        document.getElementById("comp-choice").innerHTML = 'scissors';
        compWins();
    } else if (compChoice === 'rock') {
        document.getElementById("comp-choice").innerHTML = 'rock';
        userWins();
    } else {
        document.getElementById("comp-choice").innerHTML = 'paper';
        setTimeout(function(){document.getElementById("comment").innerHTML = "It's a tie!";}, 10);
    }
}

function playRock() {
    document.getElementById("user-choice").innerHTML = 'rock';
    compChoice = options[Math.floor(Math.random()*options.length)];
    if (compChoice === 'scissors') {
        document.getElementById("comp-choice").innerHTML = 'scissors';
        userWins();
    } else if (compChoice === 'paper') {
        document.getElementById("comp-choice").innerHTML = 'paper';
        compWins();
    } else {
        document.getElementById("comp-choice").innerHTML = 'rock';
        setTimeout(function(){document.getElementById("comment").innerHTML = "It's a tie!";}, 10);
    }
}

function playScissors() {
    document.getElementById("user-choice").innerHTML = 'scissors';
    compChoice = options[Math.floor(Math.random()*options.length)];
    if (compChoice === 'paper') {
        document.getElementById("comp-choice").innerHTML = 'paper';
        userWins();
    } else if (compChoice === 'rock') {
        document.getElementById("comp-choice").innerHTML = 'rock';
        compWins();
    } else {
        document.getElementById("comp-choice").innerHTML = 'scissors';
        setTimeout(function(){document.getElementById("comment").innerHTML = "It's a tie!";}, 10);
    }
};

function theEnd() {
    if (userPoints === 3) {
        document.getElementById("comment").innerHTML = "You win!";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        document.getElementById("rock").style.display = "none";
        document.getElementById("play-again").style.display = "flex";
        document.getElementById("play-again").addEventListener("click", reload);
    } else if (compPoints === 3) {
        document.getElementById("comment").innerHTML = "You loose!";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        document.getElementById("rock").style.display = "none";
        document.getElementById("play-again").style.display = "flex";
        document.getElementById("play-again").addEventListener("click", reload);
    }
};

function reload() {
    location.reload()
}


