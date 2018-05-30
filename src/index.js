import { EVEN, getEvenResult } from './even';
import { getAnswer } from './helpers';

const getUserName = () => getAnswer('May I have your name?');

const showStartMessage = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) {
    console.log(`${gameDescription}
      `);
  }
};

const welcomeUser = (userName) => {
  console.log(`Hello, ${userName || getUserName()}
  `);
};

const run = (description, name) => {
  showStartMessage(description);
  const userName = getUserName();
  welcomeUser(userName);

  let result;
  switch (name) {
    case EVEN:
      result = getEvenResult();
      break;
    default:
      return;
  }

  const resultMessage = result ? 'Congratulations' : 'Let\'s try again';
  console.log(`${resultMessage}, ${userName}!`);
};

export default run;
