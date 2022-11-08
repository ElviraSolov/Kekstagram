const COMMENT_LENGTH = 140;
const HASHTAG_LENGTH = 20;

//Функция,  возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveInteger (firstInt, secondInt = 0) {
  if ((firstInt < 0) || (secondInt < 0)) {
    return 'Ошибка! Диапазон может быть только положительный';
  }

  if (isNaN(firstInt)) {
    return 'Ошибка! Первый параметр должен быть числом';
  }

  return Math.round(Math.random() * (secondInt - firstInt) + firstInt);
}

// eslint-disable-next-line no-console
console.log(getRandomPositiveInteger(0, 2));


//Функция для проверки максимальной длины строки
function checkStringLength (str, maxLength) {
  return str.length <= maxLength;
}

// eslint-disable-next-line no-console
console.log(checkStringLength('это строка', 9));
