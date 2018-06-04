import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const startAttempt = 1;
const attemptCount = 3;

export default (description, paramsGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  const run = (attempt) => {
    if (attempt > attemptCount) {
      return true;
    }

    const attemptParams = paramsGenerator();
    const question = car(attemptParams);
    const answer = cdr(attemptParams);

    console.log(`Question: ${(question)}`);
    const userAnswer = readlineSync.question('Your answer: ');


    if (answer === userAnswer) {
      console.log('Correct!');
      return run(attempt + 1);
    }
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    return false;
  };

  const isWin = run(startAttempt);
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
