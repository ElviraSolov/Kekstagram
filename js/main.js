import { renderPictures } from './pictures.js';
import { getData } from './api.js';
import './form.js';
import './picture-editing.js';
import './picture-preview.js';
import './sorting.js';
import { turnFilterOn, filterPictures } from './sorting.js';

getData((posts) => {
  turnFilterOn(posts);
  renderPictures(filterPictures());
});
