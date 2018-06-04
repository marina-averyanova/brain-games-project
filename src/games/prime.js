import { randomInt } from 'mathjs';
import { cons } from 'hexlet-pairs';
import run from '../runner';

const description = 'Is this number prime?';

const isPrime = (number) => {
  const findDividers = (num) => {
    let divider = 2;
    let cnt = 0;
    while (divider < num) {
      cnt = num % divider === 0 ? cnt + 1 : cnt;
      divider += 1;
    }
    return cnt;
  };

  return number === 2 || (number > 2 && findDividers(number) === 0);
};

const generateParams = () => {
  const number = randomInt(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';

  return cons(`${number}`, answer);
};

export default () => {
  run(description, generateParams);
};
