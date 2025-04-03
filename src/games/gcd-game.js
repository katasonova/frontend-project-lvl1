import {
  brainGamesGreetings, MAX_ROUNDS, getRandomNumber, getUserInput, compareResults,
  logCongratulations, MAX_NUMBER, MIN_NUMBER,
  // eslint-disable-next-line import/extensions
} from '../index.js';

const findGreatestCommonDivisor = (num1, num2) => {
  for (let i = MAX_NUMBER; i >= MIN_NUMBER; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const gcdGame = () => {
  let winScore = 0;
  const userName = brainGamesGreetings();

  console.log('Find the greatest common divisor of given numbers.'); // eslint-disable-line no-console

  while (winScore < MAX_ROUNDS) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();

    console.log(`Question: ${randomNumber1} ${randomNumber2}`); // eslint-disable-line no-console

    const userInput = getUserInput();

    const calculatedResult = findGreatestCommonDivisor(randomNumber1, randomNumber2);

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

export default gcdGame;
