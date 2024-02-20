const getRandomValue = () => {
  let cardValue = Math.ceil(Math.random() * 13 + 1);
  return cardValue;
};

const getRandomSuit = () => {
  let suit;
  let suitNumber = Math.floor(Math.random() * 4);
  if (suitNumber === 0) {
    suit = 'diamantes';
  } else if (suitNumber === 1) {
    suit = 'corazones';
  } else if (suitNumber === 2) {
    suit = 'tréboles';
  } else {
    suit = 'picas';
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
    currentCard.face = 'Sota';
  } else if (currentCard.value === 12) {
    currentCard.face = 'Reina';
  } else if (currentCard.value === 13) {
    currentCard.face = 'Rey';
  } else if (currentCard.value === 14) {
    currentCard.face = 'As';
  }

  return currentCard;
};

const getUserChoice = (callback) => {
  const mayorElement = document.querySelector('.mayor');
  const menorElement = document.querySelector('.menor');

  const onClick = (event) => {
    mayorElement.removeEventListener('click', onClick);
    menorElement.removeEventListener('click', onClick);
    callback(event.target.value);
  };

  mayorElement.addEventListener('click', onClick);
  menorElement.addEventListener('click', onClick);
};

export function game() {
  let rounds = 0;
  let score = 0;

  const showFirstCard = () => {
    const showCard = getRandomCard();
    const cardElement1 = document.querySelector('.carta1');
    cardElement1.innerHTML = `Has robado el ${showCard.face} de ${showCard.suit}`;
    return showCard;
  };

  const playRound = () => {
    const showCard = showFirstCard();
    const cardElement2 = document.querySelector('.carta2');

    let userBet = null;
    const waitMessage = document.querySelector('.waiting');

    getUserChoice((choice) => {
      userBet = choice;

      if (!userBet) {
        waitMessage.innerHTML = `Por favor elige mayor o menor`;
      }

      let flipCard = getRandomCard();
      while (flipCard.value === showCard.value) {
        flipCard = getRandomCard();
      }

      if (userBet === 'mayor' && flipCard.value > showCard.value) {
        cardElement2.innerHTML = `Has robado el ${flipCard.face} de ${flipCard.suit}\n¡Has ganado!`;
        score += 1;
        rounds += 1;
      } else if (userBet === 'menor' && flipCard.value < showCard.value) {
        cardElement2.innerHTML = `Has robado el ${flipCard.face} de ${flipCard.suit}\n¡Has ganado!`;
        score += 1;
        rounds += 1;
      } else {
        cardElement2.innerHTML = `Has robado el ${flipCard.face} de ${flipCard.suit}\n¡Has perdido!`;
        rounds += 1;
      }

      if (rounds <= 10) {
        playRound();
      } else {
        const userScore = document.querySelector('.score');
        userScore.innerHTML = `Has jugado ${rounds} rondas\nTu puntuación es ${score} aciertos.`;
      }
    });
  };

  playRound();
}
