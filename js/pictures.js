import { openBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

// функиця, создает элемент для фото на основе массива (из data.js)
const createPicture = (data) => {
  const { comments, description, likes, url } = data;
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  picture.addEventListener('click', () => {
    openBigPicture(data);
  });

  return picture;
};

// создает фрагмент и добавляет в него все фото из массива
const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });

  // добавляет фрагмент на страницу
  picturesContainer.append(fragment);
}

export { renderPictures };
