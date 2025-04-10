let userScore = 0;
let compScore = 0;

// Select all choices
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#content");
const change=document.querySelector(".msg");
const uScore=document.querySelector("#userScore");
const cScore=document.querySelector("#compScore");


// Add event listener to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});

// Play the game
const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice:", compChoice);

    if (userChoice === compChoice) {
        console.log("It's a tie!");
        msg.innerText="It's a Tie!";
        msg.style.backgroundColor="yellow";
        change.style.backgroundColor="yellow";
        
        
       return;
    }

    let userWin = true;

    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
};

// Show winner and update scores
const showWinner = (userWin) => 
{
    if (userWin) {
        userScore++;
        console.log("You win!");
        msg.innerText="You Win!"
        msg.style.backgroundColor="green";
        change.style.backgroundColor="green";
        uScore.innerText=userScore;
       
    } else {
        compScore++;
        console.log("You lose!");
        msg.innerText="You Lose!"
        msg.style.backgroundColor="red";
        change.style.backgroundColor="red";
        cScore.innerText=compScore;
       
    }
};

// Generate random computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};


