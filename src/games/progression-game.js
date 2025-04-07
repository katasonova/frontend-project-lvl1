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

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;
const MIN_PROGRESSION_STEP = 1;
const MAX_PROGRESSION_STEP = 50;

const generateProgression = () => {
  const progressionLength = getRandomNumber(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const generateFirstProgressionNumber = getRandomNumber();
  const generateProgressionStep = getRandomNumber(MIN_PROGRESSION_STEP, MAX_PROGRESSION_STEP);

  const result = [];

  // p = progression value
  for (
    let p = generateFirstProgressionNumber;
    result.length < progressionLength;
    p += generateProgressionStep
  ) {
    result.push(p);
  }

  const generateHiddenNumberPosition = getRandomNumber(0, result.length - 1);
  const hiddenNumber = result[generateHiddenNumberPosition];
  result[generateHiddenNumberPosition] = '..\u200B';

  console.log(`Question: ${result.join(' ')}`); // eslint-disable-line no-console
  return hiddenNumber;
};

const progressionGame = () => {
  let winScore = 0;
  const userName = brainGamesGreetings();

  console.log('What number is missing in the progression?'); // eslint-disable-line no-console

  while (winScore < MAX_ROUNDS) {
    const number = generateProgression();

    const userInput = getUserInput();

    const finalResult = compareResults(Number(userInput), number, userName);

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

export default progressionGame;
