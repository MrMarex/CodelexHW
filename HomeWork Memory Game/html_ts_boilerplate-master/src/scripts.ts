const gameContainer: HTMLDivElement = document.querySelector('#game-container');
const winMessage: HTMLDivElement = document.querySelector('#win-message');
const timerDisplay: HTMLDivElement = document.querySelector('.timer-display');
const startButton: HTMLButtonElement = document.querySelector('#start-game-button');
const resetButton: HTMLButtonElement = document.querySelector('.reset-button');

let cardValues = ['Apple', 'Pear', 'Kiwi', 'Orange', 'Banana', 'Cherry'];
let firstCard: HTMLDivElement | null = null;
let secondCard: HTMLDivElement | null = null;
let lockBoard = false;

let count = 0;
let timer: any;
let moves = 0;

function resetBoard() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard?.classList.remove('flip');
    secondCard?.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function checkForWin() {
  count += 1;
  if (count === 6) {
    clearInterval(timer);
    winMessage.style.display = 'block';
    winMessage.innerHTML = `YOU WON! Your ${timerDisplay.innerHTML} and You used ${moves / 2} moves!`;
    gameContainer.style.display = 'none';
    timerDisplay.style.display = 'none';
    resetButton.style.display = 'block';
  }
}

function handleCardClick() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  moves += 1;
  if (!firstCard) {
    firstCard = this as HTMLDivElement;
    return;
  }
  secondCard = this as HTMLDivElement;
  // eslint-disable-next-line no-use-before-define
  checkForMatch();
}

function disableCards() {
  firstCard?.removeEventListener('click', handleCardClick);
  secondCard?.removeEventListener('click', handleCardClick);
  resetBoard();
  checkForWin();
}

function checkForMatch() {
  const isMatch = firstCard?.getAttribute('card-value') === secondCard?.getAttribute('card-value');
  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const arrayCopy = array;
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    arrayCopy[i] = array[j];
    arrayCopy[j] = temp;
  }
  return array;
}

function startTimer() {
  let time = 0;
  timer = setInterval(() => {
    time += 1;
    timerDisplay.innerHTML = `Time: ${time} seconds`;
  }, 1000);
}

function startGame() {
  startTimer();
  startButton.style.display = 'none';
  const cards = [];
  cardValues = shuffle(cardValues);
  cardValues = cardValues.concat(cardValues);
  for (let i = 0; i < 12; i += 1) {
    const card = document.createElement('div');
    card.classList.add('memory-card');
    card.setAttribute('card-value', cardValues[i]);
    card.innerHTML = `
      <div class="front"></div>
      <div class="back">${cardValues[i]}</div>
      `;
    cards.push(card);
    card.addEventListener('click', handleCardClick);
  }
  shuffle(cards);
  for (const card of cards) {
    gameContainer.appendChild(card);
  }
}

resetButton.addEventListener('click', () => {
  clearInterval(timer);
  timerDisplay.innerHTML = 'Time: 0 seconds';
  moves = 0;
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
  count = 0;
  startGame();
  startTimer();
  winMessage.style.display = 'none';
  startButton.style.display = 'none';
  timerDisplay.style.display = 'block';
  gameContainer.style.display = 'flex';
});

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  timerDisplay.style.display = 'block';
  startGame();
});
