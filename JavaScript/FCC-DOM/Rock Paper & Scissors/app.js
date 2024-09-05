const userChoiceDisp = document.getElementById('yourChoice');
const computerChoiceDisp = document.getElementById('computerChoice');
const resultDisp = document.getElementById('result');

const possibleChoices = document.querySelectorAll('#choiceBtns');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    let userChoiceId = e.target.id;
    userChoice = userChoiceId;
    userChoiceDisp.innerHTML = userChoice;

    generateComputerChoice();
}))

function generateComputerChoice() {
    const possibleChoicesArr = ["Rock", "Paper", "Scissors"];
    const randnum = Math.floor(Math.random() * 3);
    computerChoice = possibleChoicesArr[randnum];
    computerChoiceDisp.innerHTML = computerChoice;

    generateResults();
}

function generateResults() {

    if(userChoice === computerChoice){
        result = "It's Draw!";
    }
    else if(userChoice === "Rock" && computerChoice === "Paper"){
        result = "Oops! Computer Wins";
    }
    else if(userChoice === "Rock" && computerChoice === "Scissors"){
        result = "Hey! You Wins";
    }
    else if(userChoice === "Paper" && computerChoice === "Rock"){
        result = "Hey! You Wins";
    }
    else if(userChoice === "Paper" && computerChoice === "Scissors"){
        result = "Oops! Computer Wins";
    }
    else if(userChoice === "Scissors" && computerChoice === "Rock"){
        result = "Oops! Computer Wins";
    }
    else if(userChoice === "Scissors" && computerChoice === "Paper"){
        result = "Hey! You Wins";
    }

    resultDisp.innerHTML = result;

}

