#!/usr/bin/env node

import {
  getRandomNumber,
  brainGamesGreetings,
  getUserInput,
  MAX_ROUNDS,
  compareResults,
  logCongratulations,
  // eslint-disable-next-line import/extensions
} from '../index.js';

const MIN_FOR_PRIME_NUMBER = 1;
const MAX_FOR_PRIME_NUMBER = 200;

const isPrime = (number) => {
  const divisors = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  if (divisors.length === 2) {
    return 'yes';
  }
  return 'no';
};

const primeGame = () => {
  let winScore = 0;
  const userName = brainGamesGreetings();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // eslint-disable-line no-console

  while (winScore < MAX_ROUNDS) {
    const randomNumber = getRandomNumber(MIN_FOR_PRIME_NUMBER, MAX_FOR_PRIME_NUMBER);

    console.log(`Question: ${randomNumber}`); // eslint-disable-line no-console

    const userInput = getUserInput();

    const calculatedResult = isPrime(randomNumber);

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

export default primeGame;
