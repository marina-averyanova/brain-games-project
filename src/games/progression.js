import { randomInt } from 'mathjs';
import { cons } from 'hexlet-pairs';
import { reduce } from 'lodash';
import run from '../runner';

const description = 'What number is missing in this progression?';

const progressionLength = 10;

const makeProgression = (start, step, length) => {
  const make = (last, progression) => {
    if (progression.length === length) {
      return progression;
    }
    return make(last + step, progression.concat([last + step]));
  };

  return make(start, [start]);
};

const formatQuestion = (progression, index) => reduce(progression, (m, v, k) => {
  if (k === index) {
    return m.concat(['..']);
  }
  return m.concat([`${v}`]);
}, []).join(' ');

const generateParams = () => {
  const step = randomInt(2, 10);
  const start = randomInt(1, 10);
  const progression = makeProgression(start, step, progressionLength);
  const lostIndex = randomInt(0, 10);
  const question = formatQuestion(progression, lostIndex);
  const answer = progression[lostIndex];

  return cons(question, `${answer}`);
};

export default () => {
  run(description, generateParams);
};
