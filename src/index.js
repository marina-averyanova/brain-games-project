import * as even from './games/even';
import * as calc from './games/calc';
import run from './runner';

export const startEvenGame = () => run(even);

export const startCalcGame = () => run(calc);
