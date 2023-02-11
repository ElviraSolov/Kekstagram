const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = successTemplate.querySelector('.success__button');
const ALERT_SHOW_TIME = 5000;

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

//const checkStringLength = (string, length) => string.length <= length;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = 0;
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const successMessage = () => {
  const fragment = document.createDocumentFragment();
  fragment.append(successTemplate);
  document.body.append(fragment);
};

const onSuccessButtonCLick = () => {
  document.querySelector('.success').remove();
}

successButton.addEventListener('click', onSuccessButtonCLick);

export { getRandomPositiveInteger, getRandomArrayElement, createIdGenerator, isEscapeKey, showAlert, successMessage };
