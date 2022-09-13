'use strict';

const PHOTO_COUNTER = 25;
const NAMES = [
  'Александр ',
  'Михаил',
  'Максим',
  'Лев',
  'Артем',
  'Мария',
  'Дарья',
  'Татьяна',
  'Варвара',
  'Алефтина',
]

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]
function randomNumber(min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min]
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const stringLengthCheck = (string, counter) => string.length <= counter;

let photos = new Array(PHOTO_COUNTER).fill(null).map(addPhotoDescription);

function makeComment() {

}

function addPhotoDescription() {

  let photoDescription = {
    id: '',
    url: '',
    description: '',
    likes: '',
    comments: '',

  }
  return photoDescription;
}



console.log(photos);
