import { randomInt } from 'mathjs';
import { cons } from 'hexlet-pairs';
import run from '../runner';

const description = 'Balance the given number.';

const balanceNumber = (number) => {
  const balance = (digits) => {
    const sortedDigits = ([].concat(digits)).sort();
    const least = sortedDigits[0];
    const greatest = sortedDigits[digits.length - 1];

    if (greatest - least <= 1) {
      return sortedDigits.join('');
    }
    const first = [least + 1];
    const last = [greatest - 1];

    return balance(first.concat(sortedDigits.slice(1, sortedDigits.length - 1)).concat(last));
  };

  return balance(`${number}`.split('').map(n => +n));
};

const generateParams = () => {
  const number = randomInt(100, 300);
  const answer = balanceNumber(number);

  return cons(`${number}`, answer);
};

export default () => {
  run(description, generateParams);
};
