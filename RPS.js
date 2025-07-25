let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");




 const genComputerChoice = () => {
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw play again";
    msg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin ,userChoice,computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor= "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("you lose!");
        msg.innerText = `you lose!${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};

const playgame = (userChoice) =>{
     
    const computerChoice = genComputerChoice(); 

    if (userChoice === computerChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors,paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissor
            userWin = computerChoice === "scissors" ? false : true;  
        } else {
            //rock,paper
            userWin = computerChoice === "rock" ? false : true;  
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
