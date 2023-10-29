const selection = ['Rock','Paper','Scissors']
const choiceBtn = document.querySelectorAll('.choice')

let computerScore = 0 
let playerScore = 0
let roundForPlayers = ``


// for each button it does this
 choiceBtn.forEach(button => button.addEventListener("click", () => {
  
   player = button.textContent;

  computerChoice()
  game()
}))

// random computer move
function computerChoice(){
  const computer = selection[Math.floor(Math.random()*3)]
  return computer
}
 
// plays a round by comparing and give winner
function playRound(computerSel,playerSel){
  computerSel = computerChoice()
 playerSel = player

 

 if (computerSel === playerSel) {
  winnerOfRound.textContent = "It's a tie!"
 }
    else if (playerSel == "Rock" && computerSel == "Scissors") {
      playerScore++
      winnerOfRound.textContent=`you win ${playerSel} beats ${computerSel}`
    
    } else if (playerSel == "Paper" && computerSel == "Rock") {
      playerScore++

      winnerOfRound.textContent=`you win ${playerSel} beats ${computerSel}`
    
    }else if (playerSel == "Scissors" && computerSel == "Paper") {
      playerScore++

      winnerOfRound.textContent=`you win ${playerSel} beats ${computerSel}`
    
    }else{ 
      winnerOfRound.textContent= `Computer wins ${computerSel} beats ${playerSel}`
      computerScore++
      
    }
}
let winnerOfRound = document.querySelector(".compare")




//game function plays 5 rounds 
function game(){
    playRound()
    if (playerScore == 5)
    {winDis.textContent = "You Win!"
  
    playerScore = 0 
  computerScore = 0 }
    
  else if (computerScore==5 ){
    winDis.textContent = "Machine Win!"
    
    playerScore = 0 
    computerScore = 0 }
    
  let roundOf = document.querySelector(".round")
  roundOf.textContent = `Player Score ${playerScore} and Computer Score ${computerScore}`  
  
}
let roundOf = document.querySelector(".round")
  roundOf.textContent = `Player Score ${playerScore} and Computer Score ${computerScore}` 

  let winDis = document.querySelector('.winner') //works inside of the game and will display winner of the game 