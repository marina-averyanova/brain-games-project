import { randomInt } from 'mathjs';
import { runGame, runAttempt } from '../runner';

const actions = '+-*';
const plus = '+';
const minus = '-';
const multiplication = '*';

const description = 'What is the result of the expression?';

const calculate = (x, y, action) => {
  let answer;

  if (action === plus) {
    answer = x + y;
  } else if (action === minus) {
    answer = x - y;
  } else if (action === multiplication) {
    answer = x * y;
  }
  return answer;
};

const runCalcAttempt = () => {
  const x = randomInt(1, 10);
  const y = randomInt(1, 10);
  const action = actions[randomInt(3)];

  const question = `${x} ${action} ${y}`;
  const answer = calculate(x, y, action);

  return runAttempt(question, `${answer}`);
};

export default () => {
  runGame(description, runCalcAttempt);
};
