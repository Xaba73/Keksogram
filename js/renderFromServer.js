import {renderPictures} from './pictures.js';
import {renderBigPicture} from './big-picture.js';

fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((serverPhotoDate) => {
    renderPictures(serverPhotoDate);
    renderBigPicture();
  })



