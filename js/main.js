'use strict';
function randomNumber(min, max){
  if (min < 0 || max < 0){
    return -1;
  }

  if ( min > max){
    [min, max] = [max, min]
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}
const stringLengthCheck = (string, counter) => string.length <= counter;

console.log(stringLengthCheck('Как насчёт мягких французких булок?', 140))
