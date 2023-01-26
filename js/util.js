function getRandomPositiveInteger (a, b = 0) {
  if (isNaN(a)) {
    return 'Ошибка! Первый параметр должен быть числом';
  }
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

const checkStringLength = (string, length) => string.length <= length;

function createIdGenerator() {
  let lastGeneratedId = 0;
  return function() {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

export { getRandomPositiveInteger, getRandomArrayElement, createIdGenerator, isEscapeKey };
