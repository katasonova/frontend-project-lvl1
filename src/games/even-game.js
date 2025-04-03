#!/usr/bin/env node

import {
  brainGamesGreetings,
  MAX_ROUNDS,
  getRandomNumber,
  getUserInput,
  compareResults,
  logCongratulations,
  // eslint-disable-next-line import/extensions
} from '../index.js';

const EVEN_DIVISOR = 2;
let winScore = 0;

const isEven = (number) => {
  if (number % EVEN_DIVISOR === 0) {
    return 'yes';
  }
  return 'no';
};

const isEvenGame = () => {
  const userName = brainGamesGreetings();

  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // eslint-disable-line no-console

  while (winScore < MAX_ROUNDS) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`); // eslint-disable-line no-console

    const userInput = getUserInput();
    const calculatedResult = isEven(randomNumber);

    const finalResult = compareResults(userInput, calculatedResult, userName);

    if (finalResult) {
      winScore += 1;
    } else {
      return;
    }
  }

  if (winScore === MAX_ROUNDS) {
    logCongratulations(userName);
  }
};

export default isEvenGame;
