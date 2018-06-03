import { randomInt } from 'mathjs';
import { cons } from 'hexlet-pairs';
import { map } from 'lodash';
import run from '../runner';

const description = 'What is the result of the expression?';

const balanceNumber = (number) => {
  const balance = (digits) => {
    const sortedDigits = digits.sort();
    const least = sortedDigits[0];
    const greatest = sortedDigits[digits.length - 1];

    if (greatest - least <= 1) {
      return sortedDigits.join('');
    }
    return balance([least + 1].concat(digits.slice(1, digits.length - 1)).concat([greatest - 1]));
  };

  return balance(map(`${number}`, n => +n));
};

const generateParams = () => {
  const number = randomInt(100, 300);
  const answer = balanceNumber(number);

  return cons(`${number}`, answer);
};

export default () => {
  run(description, generateParams);
};
