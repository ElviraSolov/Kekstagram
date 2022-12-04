import { getPictures } from './data.js';

const picturesList = getPictures();
const templatePicture = document.querySelector('#picture').content;
const picturesFragment = document.createDocumentFragment();

picturesList.forEach(({url, likes, comments}) => {
  const picture = templatePicture.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.appendChild(picture);
});

document.querySelector('.pictures').appendChild(picturesFragment);


