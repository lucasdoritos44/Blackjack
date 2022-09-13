const cards = document.querySelector(".card__on-table").style;
const cardImage = document.getElementById("cards__on-table");
let currentScore = document.getElementById("current__score");
let player1score = document.getElementById("1st__player-score");
let player2score = document.getElementById("2nd__player-score");
let player1 = document.querySelector(".player__1");
let player2 = document.querySelector(".player__2");
let winner = document.querySelector('.winner')
let winnerText = document.querySelector('.winner__p')

const points = [0, 2, 3, 4, 10, 11];
let currentScorePoints, currentPlayer, player1Points, player2Points;


const initializeFn = () => {
  currentPlayer = 1;
  cards.display = "none";
  currentScorePoints = 0;
  currentScore.innerText = 0;
  player1.classList.add("active");
  player2.classList.remove("active");
  winner.style.display = 'none'
  player1Points = 0;
  player2Points = 0;
  player1score.innerText = 0;
  player2score.innerText = 0;
};

initializeFn();

const addCard = () => {
  //select right card //
  cards.display = "";
  let selectedCard = points[Math.floor(Math.random() * points.length)];
  cardImage.src = `./assets/${selectedCard}.png`;

  //add points to current score
  currentScorePoints += selectedCard;
  currentScore.innerHTML = currentScorePoints;

  //check if current score is above 21 
  if(currentScorePoints > 21){
    winner.style.display = ''
    winnerText.innerHTML = `Player ${currentPlayer === 1 ? '2' : '1'} won`
}
};

const holdCard = () => {
  // push score to right player
  if (currentPlayer === 1) {
    player1Points = currentScorePoints;
    player1score.innerHTML = player1Points;
  } else {
    player2Points = currentScorePoints;
    player2score.innerHTML = player2Points;
  }

  //reset current score
  currentScorePoints = 0;
  currentScore.innerHTML = 0;
  cards.display = "none";

  //switch player
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  console.log(player2Points, player1Points, currentPlayer);
  player2.classList.add("active");
  player1.classList.remove("active");

  //check if game is done

  if(player1Points === 21 || player2Points === 21) {
    winner.style.display = ''
    winnerText.innerHTML = `Player ${currentPlayer === 2 ? '1' : '2'} won`
  }

  if(player1Points > player2Points && player2Points > 0){
    winner.style.display = ''
    winnerText.innerHTML = `Player 1 won`
  }

  if(player2Points > player1Points && player1Points > 0){
    winner.style.display = ''
    winnerText.innerHTML = `Player 2 won`
  }
};

const playAgain = () => {
    initializeFn();
}

