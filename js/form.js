import { isEscapeKey } from './util.js';

const form = document.querySelector('.img-upload__form');
const uploadFile = form.querySelector('#upload-file');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCloseButton = form.querySelector('#upload-cancel');
const body = document.querySelector('body');
const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description')

const MAX_HASHTAG_COUNT = 5;
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const UNVALID_SYMBOLS = /^#[A-Za-zА-Яа-я-яЁё0-9]{1,19}$/;
const SEPARATOR = /^\s*$/;

const pristine = new Pristine(form);

const validateHashtags = (value) => {
  const tags = value.split(SEPARATOR);

  if (tags.length > MAX_HASHTAG_COUNT) {
    return false;
  }

  tags.every((element) => {
    return (UNVALID_SYMBOLS.test(element) && (MIN_HASHTAG_LENGTH <= element.length <= MAX_HASHTAG_LENGTH));
  });
};

pristine.addValidator(hashtags, validateHashtags, 'Неправильно заполнены хэштеги');

form.addEventListener('submit', (evt) => {
  pristine.validate();
});

const openUploadOverlay = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeydown);
};

const closeUploadOverlay = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';

  document.removeEventListener('keydown', onEscKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtags ||
  document.activeElement === comment;

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

uploadFile.addEventListener('change', openUploadOverlay);
uploadCloseButton.addEventListener('click', closeUploadOverlay);
