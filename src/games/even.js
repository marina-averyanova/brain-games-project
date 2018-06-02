import { randomInt } from 'mathjs';
import run from '../runner';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => randomInt(1, 30);

const isEval = number => +number % 2 === 0;

const getAnswer = number => (isEval(number) ? 'yes' : 'no');

export default () => run(description, getQuestion, getAnswer);
