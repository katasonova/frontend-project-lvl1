import readlineSync from 'readline-sync';

export default function brainGamesGreetings() {
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console

  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`); // eslint-disable-line no-console
  return userName;
}
