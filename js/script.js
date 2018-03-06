let userPoints = 0;
let compPoints = 0;
let options = ['paper', 'scissors', 'rock'];
let compChoice;
let user = document.getElementById("user-name");
let paperButton = document.getElementById("paper");
let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors");
let comment = document.getElementById("comment");

document.getElementById("btn-new-game").addEventListener("click", newGame);

function newGame() {
    let name = prompt("Hi! Enter your name here:");
    if ((name !== '') && (name !== null)) {user.innerText = name};
    document.getElementById("start-game").style.display = "none";
    document.getElementById("main-game").style.display = "flex";
}


paperButton.addEventListener("click", playPaper);
rockButton.addEventListener("click", playRock);
scissorsButton.addEventListener("click", playScissors);

function userWins() {
    userPoints += 1;
    document.getElementById("user-points").innerHTML = userPoints;
    comment.innerHTML = "You win!";
    theEnd();
};

function compWins() {
    compPoints += 1;
    document.getElementById("comp-points").innerHTML = compPoints;
    comment.innerHTML = "CPU win!";
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
        setTimeout(function(){comment.innerHTML = "It's a tie!";}, 10);
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
        setTimeout(function(){comment.innerHTML = "It's a tie!";}, 10);
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
        setTimeout(function(){comment.innerHTML = "It's a tie!";}, 10);
    }
};

function theEnd() {
    if (userPoints === 3) {
        comment.innerHTML = "You are the winner!";
        paperButton.style.display = "none";
        scissorsButton.style.display = "none";
        rockButton.style.display = "none";
        document.getElementById("play-again").style.display = "flex";
        document.getElementById("play-again").addEventListener("click", reset);
        document.getElementById("user-choice").innerHTML = '';
        document.getElementById("comp-choice").innerHTML = '';
    } else if (compPoints === 3) {
        comment.innerHTML = "CPU is the winner!";
        paperButton.style.display = "none";
        scissorsButton.style.display = "none";
        rockButton.style.display = "none";
        document.getElementById("play-again").style.display = "flex";
        document.getElementById("play-again").addEventListener("click", reset);
        document.getElementById("user-choice").innerHTML = '';
        document.getElementById("comp-choice").innerHTML = '';
    }
};

function reset() {
    userPoints = 0;
    compPoints = 0;
    document.getElementById("user-points").innerHTML = userPoints;
    document.getElementById("comp-points").innerHTML = compPoints;
    document.getElementById("user-choice").innerHTML = '';
    document.getElementById("comp-choice").innerHTML = '';
    comment.innerHTML = "";
    paperButton.style.display = "flex";
    scissorsButton.style.display = "flex";
    rockButton.style.display = "flex";
    document.getElementById("play-again").style.display = "none";
}


