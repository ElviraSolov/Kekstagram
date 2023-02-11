import { renderPictures } from './pictures.js';
import { getData } from './api.js';
import './form.js';
import './picture-editing.js';

getData((posts) => {
  renderPictures(posts);
});
