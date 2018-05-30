
import readlineSync from 'readline-sync';

export const getuserName = () => {
    return readlineSync.question('May I have your name? ');
}

export const welcomeUser = (name) => {
    console.log('Hello, ' + name + '!');
}
