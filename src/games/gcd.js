import { randomInt } from 'mathjs';
import { runGame, runAttempt } from '../runner';

const description = 'What is the result of the expression?';

const findGcd = (x, y) => {
  if (!y) {
    return x;
  }
  return findGcd(y, x % y);
};

const runGcdAttempt = () => {
  const x = randomInt(10, 60);
  const y = randomInt(10, 60);

  const question = `${x} ${y}`;
  const answer = findGcd(x, y);

  return runAttempt(question, `${answer}`);
};

export default () => {
  runGame(description, runGcdAttempt);
};
