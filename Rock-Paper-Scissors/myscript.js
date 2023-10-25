



function getComputerChoice(){
    const computerChoice = Math.random()

if (computerChoice < 0.399){
     return"rock"

} else if (computerChoice > 0.399 && computerChoice <0.699){
     return"paper"

}else if(computerChoice > 0.699 && computerChoice < 0.99999){
     return"scissors"
} 

}
/* This functions give out the computers choice */
    
   

function playRound(playerSel) {
    computerSel = getComputerChoice();
    playerSel = prompt("Choose quick Rock, Paper, or Scissors").toLowerCase();

  
    if (playerSel == computerSel) {
      return "It's a tie!";
    } else if (
      (playerSel == "rock" && computerSel === "scissors") ||
      (playerSel =="paper" && computerSel === "rock") ||
      (playerSel == "scissors" && computerSel === "paper")
    ) {
      return `You Win! ${playerSel} beats ${computerSel}`;
    } else {
      return`Computer Wins! ${computerSel} beats ${playerSel}`;
    }
  }
  


//chat gpt answer
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const result = playRound();
      if (result.includes('You Win')) {
        playerScore++;
      } else if (result.includes('Computer Wins')) {
        computerScore++;
      }
      alert(result);
    }
  
    alert(`Game Over\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      alert('You win the game!');
    } else if (computerScore > playerScore) {
      alert('Computer wins the game!');
    } else {
      alert("It's a tie game!");
    }
  }
  
  // Start the game
  playGame();
   
