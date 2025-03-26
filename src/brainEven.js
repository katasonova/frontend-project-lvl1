#!/usr/bin/env node
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import brainGamesGreetings from './cli.js';

const WIN_SCORE = 3;
const EVEN_DIVISOR = 2;
let userInput;
let winScore = 0;

const getRandomNumber = () => {
  const MIN = 1;
  const MAX = 100;

  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
};

const getUserInput = () => {
  userInput = readlineSync.question('Your answer: ');
};

const isEven = (number) => {
  if (number % EVEN_DIVISOR === 0) {
    return 'yes';
  }
  return 'no';
};

export default function brainEvenGame() {
  const userName = brainGamesGreetings();

  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // eslint-disable-line no-console

  while (winScore < WIN_SCORE) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`); // eslint-disable-line no-console

    getUserInput();
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

  if (winScore === 3) {
    console.log(`Congratulations, ${userName}!`); // eslint-disable-line no-console
  }
}
