#!/usr/bin/env node
import {
  brainGamesGreetings, getRandomNumber, MAX_ROUNDS, getUserInput, compareResults,
  logCongratulations,
  // eslint-disable-next-line import/extensions
} from '../index.js';

const OPERATORS = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Error: Unrecognised operator';
  }
};

const calcGame = () => {
  const userName = brainGamesGreetings();
  let winScore = 0;

  console.log('What is the result of the expression?'); // eslint-disable-line no-console

  while (winScore < MAX_ROUNDS) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const operator = OPERATORS[getRandomNumber(0, OPERATORS.length)];

    console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`); // eslint-disable-line no-console

    const userInput = getUserInput();
    const calculatedResult = calculate(randomNumber1, randomNumber2, operator);

    const finalResult = compareResults(Number(userInput), calculatedResult, userName);

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

export default calcGame;
