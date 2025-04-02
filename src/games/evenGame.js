#!/usr/bin/env node

import {
  brainGamesGreetings,
  MAX_ROUNDS,
  getRandomNumber,
  getUserInput,
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

export default function isEvenGame() {
  const userName = brainGamesGreetings();

  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // eslint-disable-line no-console

  while (winScore < MAX_ROUNDS) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`); // eslint-disable-line no-console

    const userInput = getUserInput();
    const calculatedResult = isEven(randomNumber);

    if (userInput.toString() === calculatedResult.toString()) {
      console.log('Correct!'); // eslint-disable-line no-console
      winScore += 1;
    } else {
      console.log(`"${userInput.toString()}" is wrong answer ;(. Correct answer was "${calculatedResult.toString()}".`); // eslint-disable-line no-console
      console.log(`Let's try again, ${userName}!`); // eslint-disable-line no-console
      return;
    }
  }

  if (winScore === MAX_ROUNDS) {
    console.log(`Congratulations, ${userName}!`); // eslint-disable-line no-console
  }
}
