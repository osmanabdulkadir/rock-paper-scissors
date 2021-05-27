const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".Score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
  const choices = ['r','p','s']
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function converToWord(letter){
  if (letter === 'r')return "rock";
  if(letter === 'p')return 'paper';
  return "scissors"; {

  }
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + " beats " + converToWord(computerChoice) ". You win!";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computerScore + " beats " + converToWord(userChoice) ". You Lose!";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 300);
}

function draw(userChoice,computerChoice){
  result_p.innerHTML = computerScore + "equal" + converToWord(userChoice) ". Draw!";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 300);
}

}
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
  case 'rs':
  case 'pr':
  case "sp":
    console.log("USER WINS.");
    break;
    case "rp":
    case "ps":
    case "sr":
    console.console.log("Computer Wins");
    break;
    case "rr":
    case "pp":
    case "ss":
    console.console.log("Draw");
    break;


}}

function main(){
  rock_div.addEventListener('click', function() {
  game('r');
})
  scissor_div.addEventListener('click' function() {
  game('p');
})
  paper_div.addEventListener('click' function() {
  game("s");
})
}
main();
