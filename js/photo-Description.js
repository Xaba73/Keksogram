import { randomNumber, makeUniqueNumber } from './util.js';
const LikesCount = {
  min: 15,
  max: 200,
};

const AvatarCount = {
  min: 1,
  max: 6,
}
const PHOTO_COUNTER = 25;
const CommentsCount = {
  min: 1,
  max: 5,
};

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
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DECRIPTIONS_PHOTO = [
  'Великолепно',
  'Выдался удачный момент',
  'Помню, как будто это было вчера',
  'Главное, не какая у тебя камера, а кто тебя фотографирует',
  'Фильтры не нужны',
  'Вот это выдался денёк',
  'Мы отдыхали',
  'Полный релкс',
  'Черно-белое это стильно',
  'Ярко',
];

const getUniqueNumberForIdComments = makeUniqueNumber(1, 999);

function makeComments() {
  let comments = [];
  for (let i = 0; i < randomNumber(CommentsCount.min, CommentsCount.max); i++) {
    let comment = {
      id: getUniqueNumberForIdComments(),
      avatar: 'img/avatar-' + randomNumber(AvatarCount.min, AvatarCount.max) + '.svg',
      message: COMMENTS[randomNumber(0, COMMENTS.length - 1)],
      name: NAMES[randomNumber(0, NAMES.length - 1)],
    }
    comments.push(comment);
  }

  return comments;
}

function addPhotoDescriptions() {
  let photoDescriptions = [];
  for (let i = 1; i <= PHOTO_COUNTER; i++) {
    let photoDescription = {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: DECRIPTIONS_PHOTO[randomNumber(0, DECRIPTIONS_PHOTO.length - 1)],
      likes: randomNumber(LikesCount.min, LikesCount.max),
      comments: makeComments(),

    }
    photoDescriptions.push(photoDescription);
  }

  return photoDescriptions;
}

export { addPhotoDescriptions };
