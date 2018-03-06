let userPoints = 0;
let cpuPoints = 0;
let options = ['paper', 'scissors', 'rock'];
let cpuChoice;
let userChoiceText = document.getElementById("user-choice");
let cpuChoiceText = document.getElementById("cpu-choice");
let user = document.getElementById("user-name");
let cpu = document.getElementById("cpu-name");
let paperButton = document.getElementById("paper");
let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors");
let comment = document.getElementById("comment");
let winner;
let flashGreen;
let flashGrey;
let colors = ['#3498db', 'blueviolet', '#f1c40f'];
let iconsOffset = ['<i class="fa fa-hand-rock-o col-4 col-offset-1" id="icon1"></i>', '<i class="fa fa-hand-scissors-o col-4 col-offset-1" id="icon1"></i>', '<i class="fa fa-hand-paper-o col-4 col-offset-1" id="icon1"></i>'];
let icons = ['<i class="fa fa-hand-rock-o col-4" id="icon2"></i>', '<i class="fa fa-hand-scissors-o col-4" id="icon2"></i>', '<i class="fa fa-hand-paper-o col-4" id="icon2"></i>'];

for (i=1; i<3; i++) {
    setInterval(function(){
        document.getElementById("icons").innerHTML = iconsOffset[Math.floor(Math.random()*iconsOffset.length)] + icons[Math.floor(Math.random()*icons.length)];
        document.getElementById("icon1").style.color = colors[Math.floor(Math.random()*colors.length)];
        document.getElementById("icon2").style.color = colors[Math.floor(Math.random()*colors.length)];
    }, 500*i);  
}

document.getElementById("btn-new-game").addEventListener("click", newGame);

function newGame() {
    let name = prompt("Hi! Enter your name here:");
    if ((name !== '') && (name !== null)) {user.innerText = name};
    document.getElementById("start-game").style.display = "none";
    document.getElementById("main-game").style.display = "block";
}

paperButton.addEventListener("click", playPaper);
rockButton.addEventListener("click", playRock);
scissorsButton.addEventListener("click", playScissors);

function playPaper() { 
    userChoiceText.innerHTML = 'paper';
    cpuChoice = options[Math.floor(Math.random()*options.length)];
    if (cpuChoice === 'scissors') {
        cpuChoiceText.innerHTML = 'scissors';
        cpuWins();
    } else if (cpuChoice === 'rock') {
        cpuChoiceText.innerHTML = 'rock';
        userWins();
    } else {
        cpuChoiceText.innerHTML = 'paper';
        comment.innerHTML = "It's a tie!";
    }
}

function playRock() {
    userChoiceText.innerHTML = 'rock';
    cpuChoice = options[Math.floor(Math.random()*options.length)];
    if (cpuChoice === 'scissors') {
        cpuChoiceText.innerHTML = 'scissors';
        userWins();
    } else if (cpuChoice === 'paper') {
        cpuChoiceText.innerHTML = 'paper';
        cpuWins();
    } else {
        cpuChoiceText.innerHTML = 'rock';
        comment.innerHTML = "It's a tie!";
    }
}

function playScissors() {
    userChoiceText.innerHTML = 'scissors';
    cpuChoice = options[Math.floor(Math.random()*options.length)];
    if (cpuChoice === 'paper') {
        cpuChoiceText.innerHTML = 'paper';
        userWins();
    } else if (cpuChoice === 'rock') {
        cpuChoiceText.innerHTML = 'rock';
        cpuWins();
    } else {
        cpuChoiceText.innerHTML = 'scissors';
        comment.innerHTML = "It's a tie!";
    }
};

function userWins() {
    userPoints += 1;
    document.getElementById("user-points").innerHTML = userPoints;
    comment.innerHTML = "You win!";
    result();
};

function cpuWins() {
    cpuPoints += 1;
    document.getElementById("cpu-points").innerHTML = cpuPoints;
    comment.innerHTML = "CPU win!";
    result();
}

function result() {
    if (userPoints === 3) {
        winner = user;
        comment.innerHTML = "You are the winner!";
        resultLook();
    } else if (cpuPoints === 3) {
        winner = cpu;
        comment.innerHTML = "CPU is the winner!";
        resultLook();
    }
    function resultLook () {
        cpu.style.fontSize = '3.5rem';
        comment.style.fontSize = "4em";
        paperButton.style.display = "none";
        scissorsButton.style.display = "none";
        rockButton.style.display = "none";
        document.getElementById("btn-play-again").style.display = "block";
        document.getElementById("btn-play-again").addEventListener("click", reset);
        userChoiceText.innerHTML = '';
        cpuChoiceText.innerHTML = '';
        flashingName(winner);
    }
};

function flashingName(winner) {
    flashGrey = setInterval(function(){winner.style.color = "#1abc9c";}, 200);
    flashGreen = setInterval(function(){winner.style.color = "#bdc3c7";}, 400);
};

function clear() {
    clearInterval(flashGreen);
    clearInterval(flashGrey);
};

function reset() {
    clear();
    userPoints = 0;
    cpuPoints = 0;
    document.getElementById("user-points").innerHTML = userPoints;
    document.getElementById("cpu-points").innerHTML = cpuPoints;
    user.style.fontSize = '2.5rem';
    cpu.style.fontSize = '2.5rem';
    userChoiceText.innerHTML = '';
    cpuChoiceText.innerHTML = '';
    comment.innerHTML = "Throw!";
    paperButton.style.display = "block";
    scissorsButton.style.display = "block";
    rockButton.style.display = "block";
    document.getElementById("btn-play-again").style.display = "none";
    comment.style.fontSize = "3rem";
    user.style.color = '#1abc9c';
    cpu.style.color = '#1abc9c';
};



