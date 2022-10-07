import { randomNumber } from './util.js';
import { renderPictures } from './pictures.js';

const COUNT_RANDOM_PHOTO = 10;

const filtersSection = document.querySelector('.img-filters');
const randomFilterButton = document.querySelector('#filter-random');
const defaultFilterButton = document.querySelector('#filter-default');
const discussedFilterButton = document.querySelector('#filter-discussed');

function showFilters() {
  filtersSection.classList.remove('img-filters--inactive');
}
//Фильтр случайный фотографий
function getRandomPhoto(data) {
  let arrayForRender = []
  for (let i = 0; i < COUNT_RANDOM_PHOTO; i++) {
    let randomPicture = data[randomNumber(0, data.length - 1)]
    while (arrayForRender.includes(randomPicture)) {
      randomPicture = data[randomNumber(0, data.length - 1)]
    }
    arrayForRender.push(randomPicture);
  }
  return arrayForRender;
}

function renderRandomPhoto(data) {
  randomFilterButton.addEventListener('click', (evt) => {
    changeFilter(evt);
    renderPictures(getRandomPhoto(data));
  })
}
//Фильтр  по умолчанию

function renderDefaultPhoto(data) {
  defaultFilterButton.addEventListener('click', (evt) => {
    changeFilter(evt);
    renderPictures(data);
  })

}
//Фильтр самых обсуждаемых фотографий
function getDiscussedPhoto(data) {
  let arrayForRender = data.slice();
  arrayForRender.sort(function (a, b) {
    return b.comments.length - a.comments.length;
  })
  return arrayForRender;
}

function renderDiscussedPhoto(data) {
  discussedFilterButton.addEventListener('click', (evt) => {
    changeFilter(evt);
    renderPictures(getDiscussedPhoto(data));
  })
}

//Подготовка к смене фильтра
function addActiveClassForButton(targetButton) {
  let buttons = document.querySelectorAll('.img-filters__button');
  buttons.forEach(button => {
    button.classList.remove('img-filters__button--active');
  });
  targetButton.classList.add('img-filters__button--active');
}

function clearPhotoList() {
  let allPictures = document.querySelectorAll('.picture');
  allPictures.forEach(picture => {
    picture.remove();
  })
}

function changeFilter(evt) {
  addActiveClassForButton(evt.target)
  clearPhotoList()
}

function addFilter(data) {
  renderRandomPhoto(data);
  renderDefaultPhoto(data);
  renderDiscussedPhoto(data);
}

export { showFilters, addFilter }
