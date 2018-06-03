import { randomInt } from 'mathjs';
import { runGame, runAttempt } from '../runner';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const runEvenAttempt = () => {
  const question = randomInt(1, 30);
  const answer = isEven(question) ? 'yes' : 'no';

  return runAttempt(question, answer);
};

export default () => {
  runGame(description, runEvenAttempt);
};
