import { renderPictures } from './pictures.js';
import { showFilters, addFilter } from './pictures-filters.js';

fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((serverPhotoDate) => {
    renderPictures(serverPhotoDate);
    showFilters();
    addFilter(serverPhotoDate);
  })


