const getRandomValue = () => {
  let cardValue = Math.ceil(Math.random() * 13 + 1);
  return cardValue;
};

const getRandomSuit = () => {
  let suit;
  let suitNumber = Math.floor(Math.random() * 4);
  if (suitNumber === 0) {
    suit = 'diamonds';
  } else if (suitNumber === 1) {
    suit = 'hearts';
  } else if (suitNumber === 2) {
    suit = 'clovers';
  } else {
    suit = 'spades';
  }
  return suit;
};

const getRandomCard = () => {
  let value = getRandomValue();
  let suit = getRandomSuit();
  let currentCard = { value: value, suit: suit };
  currentCard.value = value;
  currentCard.suit = suit;
  if (currentCard.value < 11) {
    currentCard.face = currentCard.value;
  } else if (currentCard.value === 11) {
    currentCard.face = 'Jack';
  } else if (currentCard.value === 12) {
    currentCard.face = 'Queen';
  } else if (currentCard.value === 13) {
    currentCard.face = 'King';
  } else if (currentCard.value === 14) {
    currentCard.face = 'Ace';
  }

  return currentCard;
};

const userChoice = () => {
  let userCard;
  const userChoiceElementMayor = document.querySelector('.mayor');
  userChoiceElementMayor.addEventListener('click', (event) => {
    userCard = event.target.value;
  });
  const userChoiceElementMenor = document.querySelector('.menor');
  userChoiceElementMenor.addEventListener('click', (event) => {
    userCard = event.target.value;
  });
  return userCard;
};


const showFirstCard = () => {
const showCard = getRandomCard();
    return showCard;
}

export function game() {
  let rounds = 0;
  let score = 0;
  while (rounds <= 10) {
    showFirstCard();
    const cardElement1 = document.querySelector('.carta1');
    cardElement1.innerHTML = `Has robado el ${showCard.face} de ${showCard.suit}`;
    let userBet = userChoice();
      let flipCard = getRandomCard();
      while (flipCard.value === showCard.value) {
        flipCard = getRandomCard();
      }
      if (userBet === 'mayor' && flipCard.value > showCard.value) {
        const cardElement2 = document.querySelector('p.carta2');
        cardElement2.innerHTML = `Has robado el ${flipCard.face} de ${flipCard.suit}
      ¡Has ganado!`;
        score += 1;
        rounds += 1;
      } else if (userBet === 'menor' && flipCard.value < showCard.value) {
        const cardElement2 = document.querySelector('p.carta2');
        cardElement2.innerHTML = `Has robado el ${flipCard.face} de ${flipCard.suit}
      ¡Has ganado!`;
        score += 1;
        rounds += 1;
      } else {
        const cardElement2 = document.querySelector('p.carta2');
        cardElement2.innerHTML = `Has robado el ${flipCard.face} de ${flipCard.suit}
      ¡Has ganado!`;
        rounds += 1;
      }
    }
  }
  if (rounds >= 10) {
    const userScore = document.querySelector('.score');
    userScore.innerHTML = `Has jugado ${rounds} rondas
Tu puntuación es ${score} aciertos.`;
  }

