const escKey = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
}

const randomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min]
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const stringLengthCheck = (string, counter) => string.length <= counter;

const makeUniqueNumber = (min, max) => {
  let uniqueNumberStorage = [];

  return () => {
    let uniqueNumber = randomNumber(min, max)
    while (uniqueNumberStorage.includes(uniqueNumber)) {
      if (uniqueNumberStorage.length >= (max - min + 1)) {
        throw new Error(`Закончились уникальные числа в диапазоне ${min} - ${max}`)
      }

      uniqueNumber = randomNumber(min, max);
    }
    uniqueNumberStorage.push(uniqueNumber);
    return uniqueNumber;
  }
}

const isEscEvent = (evt) => {
  return evt.key === escKey.ESCAPE || evt.key === escKey.ESC;
};


const DEBOUNCE_DELAY = 500;

function debounce(func, timeout = DEBOUNCE_DELAY) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export { randomNumber, stringLengthCheck, makeUniqueNumber, isEscEvent, debounce };
